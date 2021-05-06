import { useEffect, useState } from 'react';
import { getCategories } from './apiCore';
import Layout from './Layout';

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Layout
      title="Página de compras"
      description="E-commerce App"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">{JSON.stringify(categories)}</div>
        <div className="col-8">direita</div>
      </div>
    </Layout>
  );
};

export default Shop;
