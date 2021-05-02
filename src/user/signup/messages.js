import { Link } from 'react-router-dom';

export const showError = (error) => (
  <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
    {error}
  </div>
);

export const showSuccess = (success) => (
  <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
    Seu cadastro foi concluído. Faça <Link to="/signin">Login</Link>
  </div>
);
