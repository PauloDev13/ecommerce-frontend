/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { isAuthenticated } from '../auth';
import Layout from '../core/Layout';
import { createProduct } from './apiAdmin';

const AddProduct = () => {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    quantity: '',
    shipping: '',
    photo: '',
    loading: false,
    error: '',
    productCreated: '',
    redirectToProfile: false,
    formData: '',
  });

  // Usa destruct para pegar os dados do usuário e o token
  const { user, token } = isAuthenticated();

  const {
    name,
    description,
    price,
    categories,
    category,
    quantity,
    shipping,
    photo,
    loading,
    error,
    productCreated,
    redirectToProfile,
    formData,
  } = values;

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: '', loading: true });
    createProduct(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: '',
          description: '',
          price: '',
          photo: '',
          quantity: '',
          loading: false,
          productCreated: data.name,
        });
      }
    });
  };

  const newPostForm = () => (
    <form className="mb-3" onSubmit={clickSubmit}>
      <h4>Publicar foto</h4>
      <div className="form-group">
        <label className="btn btn-secondary">
          <input
            type="file"
            accept="image/*"
            value={photo}
            onChange={handleChange('photo')}
          />
        </label>
      </div>

      <div className="form-group">
        <label className="text-muted">Nome</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={handleChange('name')}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Descrição</label>
        <textarea
          className="form-control"
          value={description}
          onChange={handleChange('description')}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Preço</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={handleChange('price')}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Categoria</label>
        <select className="form-control" onChange={handleChange('category')}>
          <option value="">Escolha uma categoria</option>
          <option value="607e33aa4bb0e525bcf22325">Produtos temáticos</option>
        </select>
      </div>

      <div className="form-group">
        <label className="text-muted">Enviado</label>
        <select className="form-control" onChange={handleChange('shipping')}>
          <option value="">Escolha uma opção</option>
          <option value="0">Não</option>
          <option value="0">Sim</option>
        </select>
      </div>

      <div className="form-group">
        <label className="text-muted">Quantidade</label>
        <input
          type="number"
          className="form-control"
          value={quantity}
          onChange={handleChange('quantity')}
        />
      </div>
      <button className="btn btn-outline-primary">Salvar</button>
    </form>
  );

  return (
    <Layout
      title="Adicionando produto"
      description={`Olá ${user.name}! Adicionar um novo produto?`}
      className="container"
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">{newPostForm()}</div>
      </div>
    </Layout>
  );
};

export default AddProduct;
