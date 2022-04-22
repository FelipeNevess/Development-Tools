import {
  AboutWindows,
} from './About';

import {
  WindowsInstall
} from './Install';

import {
  WindowsSettings
} from './Settings';

const data = [
  {
    title: 'windows',
    about: AboutWindows(),
    installations: WindowsInstall(),
    settings: WindowsSettings(),
  },
];

export default data;
