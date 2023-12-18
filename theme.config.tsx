import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import Image from 'next/image'

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
    <span>
      GBS FrameWork Docs <br />
      <Image
      src="https://uploads-ssl.webflow.com/5d9ba0eb5f6edb77992a99d0/5de7ce5d154e7e36ea67a77f_Christmastree.gif"
      width={100}
      height={100}
      alt="Picture of the author"
    />
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
