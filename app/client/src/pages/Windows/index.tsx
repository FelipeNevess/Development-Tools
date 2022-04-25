import React from 'react';

import { FaWindows } from 'react-icons/fa';

import { PageStructure, NavOptions } from '../../components';
import { FilterOptions } from '../../utils';

function WindowsAbout() {
  const response = FilterOptions('windows');

  return (
    <PageStructure
      icon={ <FaWindows />}
      title='Windows 10'
      filter={
        <NavOptions
          installation
          settings
        />
      }
      filterPage={ response }
    />
  );
}

export default WindowsAbout;
