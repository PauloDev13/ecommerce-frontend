import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../auth';
import Layout from '../../core/Layout';

const AdminDashboard = () => {
  const {
    user: { name, email },
  } = isAuthenticated();

  const adminLinks = () => (
    <div className="card">
      <h4 className="card-header">Links do administrador</h4>
      <ul className="list-group">
        <li className="list-group-item">
          <Link className="nav-link" to="/create/category">
            Cadastrar categoria
          </Link>
        </li>
        <li className="list-group-item">
          <Link className="nav-link" to="/create/product">
            Cadastrar produto
          </Link>
        </li>
      </ul>
    </div>
  );

  const adminInfo = () => (
    <div className="card mb-5">
      <h4 className="card-header">Informações do administrador</h4>
      <ul className="list-group">
        <li className="list-group-item">Nome: {name}</li>
        <li className="list-group-item">Email: {email}</li>
        <li className="list-group-item">Perfil: Administrador</li>
      </ul>
    </div>
  );

  return (
    <Layout
      className="container-fluid mb-5 "
      title="Dashboard"
      description={`Olá ${name}`}
    >
      <div className="row">
        <div className="col-3">{adminLinks()}</div>
        <div className="col-9">{adminInfo()}</div>
      </div>
    </Layout>
  );
};
export default AdminDashboard;
