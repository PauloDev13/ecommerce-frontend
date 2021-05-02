import Layout from '../../core/Layout';
import SignInForm from './SingInForm';

const Signin = () => {
  return (
    <Layout
      title="Página de login"
      description="Login no E-commerce App"
      className="container col-md-8 offset-md-2"
    >
      <SignInForm />
    </Layout>
  );
};

export default Signin;
