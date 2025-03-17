import React from 'react';

import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link, Route, Switch } from 'react-router-dom';

import { Home } from './screens/homePage';
import { CarsPage } from './screens/carsPage';
import { OrdersPage } from './screens/ordersPage';
import { UserPage } from './screens/userPage';
import { HomeNavbar } from './components/headers';
import { Footer } from './components/footers';

function App() {
  return (
      <>
        <HomeNavbar/>
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
        <Footer/>
      </>
  );
}

export default App;
