import { Link } from 'react-router-dom';

export const showSucess = (success, name) => {
  if (success) {
    return (
      <h5 className="text-success">
        A categoria {name.toUpperCase()} foi criada!
      </h5>
    );
  }
};

export const showError = (error, name) => {
  if (error) {
    if (error.substring(0, 4) === '1100') {
      return (
        <h5 className="text-danger">{`Categoria ${name.toUpperCase()} já cadastrada!`}</h5>
      );
    } else {
      return <h5 className="text-danger">{error}</h5>;
    }
  }
};

export const goBack = () => (
  <div className="mt-5">
    <Link className="text-warning" to="/admin/dashboard">
      Retornar para Dashboard
    </Link>
  </div>
);
