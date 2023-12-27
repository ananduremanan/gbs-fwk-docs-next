import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Snowfall from 'react-snowfall';

const config: DocsThemeConfig = {
  banner: {
    key: 'outdated-warning',
    dismissible: false,
    text: (
      <div style={{ color: 'red' }}>
        ⚠ Warning !!! This Documentation Is Outdated
      </div>
    ),
  },
  logo: (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      {/* <Snowfall snowflakeCount={50} speed={[0, 1.0]} /> */}
      GBS FrameWork Docs
      {/* <Image
        src="https://raw.githubusercontent.com/ananduremanan/Demo/main/xmastree.gif"
        width={50}
        height={50}
        alt="Picture of the author"
      /> */}
    </span>
  ),
  project: {
    link: 'https://github.com/ananduremanan/gbs-fwk-docs-next',
  },
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== '/') {
      return {
        titleTemplate: '%s – Gbs Docs',
      };
    }
  },
  docsRepositoryBase:
    'https://github.com/ananduremanan/gbs-fwk-docs-next/blob/main',
  footer: {
    text: (
      <span>
        Gbs Fwk Docs {new Date().getFullYear()} ©{' '}
        <a href="https://gramproindia.com" target="_blank">
          Built with 🎈 fun @ GBS
        </a>
        .
      </span>
    ),
  },
};

console.log(
  `%c _____   ____     _____ 
/ ____|  |  _ \\  / ____|
| |  __  | |_) | | (___  
| | |_ | |  _ <   \\___ \\ 
| |__| | | |_) |  ____) |
 \\_____| |____/  |_____/ `,
  'color: red'
);

export default config;
