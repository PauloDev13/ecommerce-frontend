// import { useState } from 'react';

import Layout from '../../core/Layout';
// import { API } from '../config/configUrl';
import SignUpForm from './SignUpForm';

const Signup = () => {
  // const [values, setValues] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   error: '',
  //   success: false,
  // });

  // const { name, email, password } = values;

  // const handleChange = (name) => (event) => {
  //   setValues({ ...values, error: false, [name]: event.target.value });
  // };

  // const signup = (user) => {
  //   fetch(`${API}/signup`, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((response) => response.json())
  //     .catch((err) => console.error(err));
  // };

  // const clickSubmit = (event) => {
  //   event.preventDefault();
  //   signup({ name, email, password });
  // };

  // const signUpForm = () => (
  //   <form>
  //     <div className="form-group">
  //       <label className="text-muted">Nome</label>
  //       <input
  //         onChange={handleChange('name')}
  //         type="text"
  //         className="form-control"
  //       />
  //     </div>

  //     <div className="form-group">
  //       <label className="text-muted">Email</label>
  //       <input
  //         onChange={handleChange('email')}
  //         type="email"
  //         className="form-control"
  //       />
  //     </div>

  //     <div className="form-group">
  //       <label className="text-muted">Senha</label>
  //       <input
  //         onChange={handleChange('password')}
  //         type="password"
  //         className="form-control"
  //       />
  //     </div>
  //     <button onClick={clickSubmit} className="btn btn-primary">
  //       Cadastrar
  //     </button>
  //   </form>
  // );

  return (
    <Layout
      title="Página de cadastro"
      description="Cadastro no E-commerce App"
      className="container col-md-8 offset-md-2"
    >
      <SignUpForm />
      {/* {signUpForm()} */}
      {/* {JSON.stringify(values)} */}
    </Layout>
  );
};

export default Signup;
