import { useEffect, useState } from 'react';
import { getProducts } from './apiCore';
import Card from './Card';
import Layout from './Layout';

const Home = () => {
  const [productBySell, setProductBySell] = useState([]);
  const [productByArrival, setProductByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts('sold').then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts('createdAt').then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout
      title="Página Inicial"
      description="E-commerce App"
      className="container-fluid"
    >
      <h2 className="mb-4">Novo envio</h2>
      <div className="row">
        {productByArrival.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>

      <h2 className="mb-4">Mais vendidos</h2>
      <div className="row">
        {productBySell.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
