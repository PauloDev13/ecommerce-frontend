import { useState } from 'react';
import { Link } from 'react-router-dom';

import { API } from '../config/configUrl';

const SignUpForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const signup = async (user) => {
    try {
      const response = await fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      return await response.json();
    } catch (err) {
      return console.error(err);
    }
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          success: true,
        });
      }
    });
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? '' : 'none' }}
    >
      Seu cadastro foi concluído. Faça <Link to="/signin">Login</Link>
    </div>
  );

  return (
    <>
      {showSuccess()}
      {showError()}
      <form>
        <div className="form-group">
          <label className="text-muted">Nome</label>
          <input
            onChange={handleChange('name')}
            type="text"
            className="form-control"
            value={name}
          />
        </div>

        <div className="form-group">
          <label className="text-muted">Email</label>
          <input
            onChange={handleChange('email')}
            type="email"
            className="form-control"
            value={email}
          />
        </div>

        <div className="form-group">
          <label className="text-muted">Senha</label>
          <input
            onChange={handleChange('password')}
            type="password"
            className="form-control"
            value={password}
          />
        </div>
        <button onClick={clickSubmit} className="btn btn-primary">
          Cadastrar
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
