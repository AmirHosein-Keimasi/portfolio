import React from 'react';
import {createRoot} from 'react-dom/client';
import AppContainer from './Containers/AppContainer';




const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);

