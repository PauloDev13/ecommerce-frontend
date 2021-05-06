// import { useEffect, useState } from 'react';
import { API } from '../config/configUrl';
// import { getPhoto } from './apiCore';

const ShowImage = ({ item = {}, url = '' }) => {
  // const [teste, setTeste] = useState([]);

  // const buscaFoto = () => {
  //   getPhoto(item._id).then((data) => {
  //     if (data) {
  //       setTeste(data);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   buscaFoto();
  // }, []);

  return (
    <div className="product-img">
      <img
        src={`${API}/${url}/photo/${item._id}`}
        alt={item.name}
        className="mb-3"
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      />
    </div>
  );
};
export default ShowImage;
