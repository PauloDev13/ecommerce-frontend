import { API } from '../config/configUrl';

export const getProducts = async (sortBy) => {
  return await fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.error('Erro ao buscar categorias', err));
};

export const getPhoto = async (idProduct) => {
  return await fetch(`${API}/product/photo/${idProduct}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.error('Erro ao buscar foto', err));
};
