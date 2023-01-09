import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import { Routes } from './Routes';
import { viewsCreateStoreKit } from '../redux';

const { INITIAL_STATE } = window;
const store = viewsCreateStoreKit(INITIAL_STATE);

hydrateRoot(
  document.getElementById('root'),
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
);
