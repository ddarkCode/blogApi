import React from 'react';
import { renderRoutes } from 'react-router-config';

import Header from './partials/Header';
import Footer from './partials/Footer';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
};

export default { component: App };


