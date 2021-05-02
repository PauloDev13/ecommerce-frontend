import { useState } from 'react';

import { isAuthenticated } from '../auth';
import Layout from '../core/Layout';

const AddCategory = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // Usa destruct para pegar os dados do usuário e o token
  const { user, token } = isAuthenticated();

  const handleChange = (event) => {
    setError('');
    setName(event.target.value);
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSuccess(false);
  };

  const newCategoryForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Nome</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          autoFocus
        />
      </div>
      <button className="btn btn-outline-primary">Salvar</button>
    </form>
  );

  return (
    <Layout
      title="Adicionando categoria"
      description={`Adicionar uma nova categoria ${name}?`}
      className="container"
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">{newCategoryForm()}</div>
      </div>
    </Layout>
  );
};

export default AddCategory;
