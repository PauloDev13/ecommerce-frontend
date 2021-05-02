import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './core/Home';
import Signin from './user/signin/Signin';
import Signup from './user/signup/Signup';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
