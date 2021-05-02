import { Redirect, Route } from 'react-router';
import { isAuthenticated } from '.';

/* 
	Redireciona para a tela login se o usuário ainda não está autenticado.
*/

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
