import React, { useEffect } from 'react';
import sdk from '@stackblitz/sdk';
import './App.css';

export default function App() {
  useEffect(() => {
    sdk.embedProjectId('elementOrId', 'vitejs-vite-vvfyap', {
      forceEmbedLayout: true,
      openFile: 'src/App.tsx',
      clickToLoad: false,
      hideExplorer: true,
      hideNavigation: true,
    });
  }, []);

  return (
    <div>
      {/* StackBlitz project will be embedded here */}
      <div id="elementOrId"></div>
    </div>
  );
}
