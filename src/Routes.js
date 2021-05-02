import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

import Home from './core/Home';
import UserDashboard from './user/dashboard/UserDashboard';
import Signin from './user/signin/Signin';
import Signup from './user/signup/Signup';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/dashboard" exact>
          <UserDashboard />
        </PrivateRoute>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
