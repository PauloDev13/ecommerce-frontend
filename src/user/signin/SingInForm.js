import { useState } from 'react';
import { Redirect } from 'react-router';

import { signin } from '../../auth';
import { showError, showLoading } from '../messages';

const SingInForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, error, loading, redirectToReferrer } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          redirectToReferrer: true,
        });
      }
    });
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to="/" />;
    }
  };

  return (
    <>
      {showLoading(loading)}
      {showError(error)}
      {redirectUser()}
      <form>
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
          Entrar
        </button>
      </form>
    </>
  );
};

export default SingInForm;