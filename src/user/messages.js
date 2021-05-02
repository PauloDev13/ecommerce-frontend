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

export const showLoading = (loading) =>
  loading && (
    <div className="alert alert-info">
      <h2>Conectando...</h2>
    </div>
  );
