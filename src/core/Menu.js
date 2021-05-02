import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, signout } from '../auth';

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#ff9900' };
  } else {
    return { color: '#ffffff' };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, '/')} to="/">
          Início
        </Link>
      </li>

      <li className="nav-item">
        <Link
          className="nav-link"
          style={isActive(history, '/user/dashboard')}
          to="/user/dashboard"
        >
          Dashboard
        </Link>
      </li>

      {!isAuthenticated() && (
        <>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, '/signin')}
              to="/signin"
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, '/signup')}
              to="/signup"
            >
              Cadastro
            </Link>
          </li>
        </>
      )}

      {isAuthenticated() && (
        <li className="nav-item">
          <span
            className="nav-link"
            style={{ cursor: 'pointer', color: '#ffffff' }}
            onClick={() =>
              signout(() => {
                history.push('/');
              })
            }
          >
            Sair
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
