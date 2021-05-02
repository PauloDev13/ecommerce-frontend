import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { signup } from '../../auth';
import { showError, showSuccess } from './messages';

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

  // const showError = () => (
  //   <div
  //     className="alert alert-danger"
  //     style={{ display: error ? '' : 'none' }}
  //   >
  //     {error}
  //   </div>
  // );

  // const showSuccess = () => (
  //   <div
  //     className="alert alert-info"
  //     style={{ display: success ? '' : 'none' }}
  //   >
  //     Seu cadastro foi concluído. Faça <Link to="/signin">Login</Link>
  //   </div>
  // );

  return (
    <>
      {showSuccess(success)}
      {showError(error)}
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
