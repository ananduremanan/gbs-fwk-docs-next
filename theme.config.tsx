import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>GBS FrameWork Docs</span>,
  project: {
    link: 'https://github.com/ananduremanan/gbs-fwk-docs-next',
  },
  docsRepositoryBase: 'https://github.com/ananduremanan/gbs-fwk-docs-next',
  footer: {
    text: 'GBS Framework Documentation © 2023',
  },
};

console.log(`%c _____   ____     _____ 
/ ____|  |  _ \\  / ____|
| |  __  | |_) | | (___  
| | |_ | |  _ <   \\___ \\ 
| |__| | | |_) |  ____) |
 \\_____| |____/  |_____/ `, 'color: red');

export default config;
