import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes';
import {renderRoutes} from '../helpers/routes';

const AppRouter = () => (
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
);

export default AppRouter;