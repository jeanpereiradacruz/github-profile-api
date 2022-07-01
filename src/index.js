import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GithubProvider from './providers/github-provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GithubProvider>
      <App />
    </GithubProvider>
  </React.StrictMode>
);
