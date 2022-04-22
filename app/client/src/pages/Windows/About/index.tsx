import React from 'react';

import { FaWindows } from 'react-icons/fa';
import { PageStructure, NavOptions, Data } from '../../../components';

function WindowsAbout() {
  return (
    <PageStructure
      icon={ <FaWindows />}
      title='Windows 10'
      filter={
        <NavOptions
          installation
          settings
          pageName='windows'
        />
      }
      filterLinux={ Data[0].about }
    />
  );
}

export default WindowsAbout;
