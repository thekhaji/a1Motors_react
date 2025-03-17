import React from 'react';

import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link, Route, Switch } from 'react-router-dom';

import { Home } from './screens/homePage';
import { CarsPage } from './screens/carsPage';
import { OrdersPage } from './screens/ordersPage';
import { UserPage } from './screens/userPage';

function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/member-page">User</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/cars">
              <CarsPage/>
            </Route>
            <Route path="/orders">
              <OrdersPage/>
            </Route>
            <Route path="/member-page">
              <UserPage/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </nav>
      </div>
  );
}

export default App;
