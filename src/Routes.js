import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateUserRoute from './auth/PrivateUserRoute';
import PrivateAdminRoute from './auth/PrivateAdminRoute';

import UserDashboard from './user/dashboard/UserDashboard';
import AdminDashboard from './user/dashboard/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Home from './core/Home';
import Shop from './core/Shop';
import Signin from './user/signin/Signin';
import Signup from './user/signup/Signup';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Switch>
        <PrivateUserRoute path="/user/dashboard" exact>
          <UserDashboard />
        </PrivateUserRoute>

        <PrivateAdminRoute path="/admin/dashboard" exact>
          <AdminDashboard />
        </PrivateAdminRoute>

        <PrivateAdminRoute path="/create/category" exact>
          <AddCategory />
        </PrivateAdminRoute>

        <PrivateAdminRoute path="/create/product" exact>
          <AddProduct />
        </PrivateAdminRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
