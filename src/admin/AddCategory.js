import { useState } from 'react';

import { isAuthenticated } from '../auth';
import Layout from '../core/Layout';
import { createCategory } from './apiAdmin';
import { goBack, showError, showSucess } from './messages';

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
    // Chama o endpoint na api para criar categoria
    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError('');
        setSuccess(true);
      }
    });
  };

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
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
      <button type="submit" className="btn btn-outline-primary">
        Salvar
      </button>
    </form>
  );

  return (
    <Layout
      title="Adicionando categoria"
      description={`Olá ${user.name}! Adicionar uma nova categoria?`}
      className="container"
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showSucess(success, name)}
          {showError(error, name)}
          {newCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Layout>
  );
};

export default AddCategory;
