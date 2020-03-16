import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWrapper from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <RouteWrapper exact path='/' component={SignIn} />
      <RouteWrapper path='/register' component={SignUp} />
      <RouteWrapper path='/dashboard' component={Dashboard} isPrivate />
      <RouteWrapper path='/profile' component={Profile} isPrivate />
      <RouteWrapper path='*' component={Page404} />
    </Switch>
  );
}
