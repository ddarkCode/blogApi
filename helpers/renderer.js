import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

import { Routes } from '../views/Routes';
import logger from '../logger/logger';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <div>{renderRoutes(Routes)}</div> 
      </StaticRouter>
    </Provider>
  );
  logger.info('Store before rendering: ', store.getState());

  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/styles.css">

  </head>
  <body>
    <div id="root">${content}</div>

    <script>
       window.INITIAL_STATE = ${serialize(store.getState())}
    </script>

    <script src="/viewsBundle.js"></script>
  </body>
</html>
`;
};
