import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link, Route, Switch } from 'react-router-dom';
import { Home } from './screens/homePage';
import { CarsPage } from './screens/carsPage';
import { OrdersPage } from './screens/ordersPage';
import { UserPage } from './screens/userPage';
import { HomeNavbar } from './components/headers';
import { Footer } from './components/footers';
import { HelpPage } from './screens/helpPage';
import '../css/app.css';
import '../css/navbar.css';
import '../css/home.css';



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
            <Route path="/help-page">
              <HelpPage/>
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
