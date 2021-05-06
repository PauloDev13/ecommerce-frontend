import Layout from './Layout';

const Shop = () => {
  return (
    <Layout
      title="Página de compras"
      description="E-commerce App"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">esquerda</div>
        <div className="col-8">direita</div>
      </div>
    </Layout>
  );
};

export default Shop;
