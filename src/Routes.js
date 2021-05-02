import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateUserRoute from './auth/PrivateUserRoute';
import PrivateAdminRoute from './auth/PrivateAdminRoute';

import Home from './core/Home';
import UserDashboard from './user/dashboard/UserDashboard';
import AdminDashboard from './user/dashboard/AdminDashboard';
import Signin from './user/signin/Signin';
import Signup from './user/signup/Signup';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateUserRoute path="/user/dashboard" exact>
          <UserDashboard />
        </PrivateUserRoute>
        <PrivateAdminRoute path="/admin/dashboard" exact>
          <AdminDashboard />
        </PrivateAdminRoute>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
