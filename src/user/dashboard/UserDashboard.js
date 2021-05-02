import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../auth';
import Layout from '../../core/Layout';

const UserDashboard = () => {
  const {
    user: { name, email },
  } = isAuthenticated();

  const userLinks = () => (
    <div className="card">
      <h4 className="card-header">Links do usuário</h4>
      <ul className="list-group">
        <li className="list-group-item">
          <Link className="nav-link" to="/cart">
            Meu carrinho
          </Link>
        </li>
        <li className="list-group-item">
          <Link className="nav-link" to="/profile/update">
            Atualizar perfil
          </Link>
        </li>
      </ul>
    </div>
  );

  const userInfo = () => (
    <div className="card mb-5">
      <h4 className="card-header">Informações do usuário</h4>
      <ul className="list-group">
        <li className="list-group-item">Nome: {name}</li>
        <li className="list-group-item">Email: {email}</li>
        <li className="list-group-item">Perfil: Usuário cadastrado'</li>
      </ul>
    </div>
  );

  const purchaseHistory = () => (
    <div className="card">
      <h4 className="card-header">Histórico de compras</h4>
      <ul className="list-group">
        <li className="list-group-item">history</li>
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
        <div className="col-3">{userLinks()}</div>
        <div className="col-9">
          {userInfo()}
          {purchaseHistory()}
        </div>
      </div>
    </Layout>
  );
};
export default UserDashboard;
