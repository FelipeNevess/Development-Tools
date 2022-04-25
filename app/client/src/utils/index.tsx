import { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { NavOptionsContext } from '../context/NavOptions';
import Data from '../components/_FrontEndInfos';
import { IRequest } from '../components/_FrontEndInfos/interface';

export const FilterOptions = (pageName?: string) => {
  const [valuePage, setValuePage] = useState<IRequest>();

  const filterPageName = useCallback(() => {
    const result = Data.find((item) =>  item.title === pageName);

    setValuePage(result);
  }, [pageName]);

  useEffect(() => {
    filterPageName();
  }, [filterPageName]);

  return valuePage;
}

export const HandleSelected = () => {
  const { setSelected } = useContext(NavOptionsContext).context;

  const result = useRef<HTMLUListElement>(null);

  const handleClick = useCallback(() => {
    result.current.addEventListener('click', (e: MouseEvent) => {
      const request = e.target as HTMLTextAreaElement;

      const spanClassName = result.current.querySelectorAll('span');

      if (request.tagName === 'SPAN') {
        spanClassName.forEach((item) => item.classList.remove('selected'));

        request.classList.add('selected');

        setSelected(request.innerText);
      }
    });
  }, [setSelected]);

  return {
    handleClick,
    result
  };
}
