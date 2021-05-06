import { useState } from 'react';

const Checkbox = ({ categories = {} }) => {
  const [checked, setCheck] = useState([]);

  const handleToggle = (cat) => () => {
    // retorna o primeiro índice ou =1
    const currentCategoryId = checked.indexOf(cat);
    const newCheckedCategoryId = [...checked];

    //Se o item atual que foi marcado já existe no state, excuta o push
    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(cat);
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1);
    }

    console.log(newCheckedCategoryId);
    setCheck(newCheckedCategoryId);
  };

  return categories.map((cat, index) => (
    <li key={index} className="list-unstyled">
      <input
        onChange={handleToggle(cat._id)}
        value={checked.indexOf(cat._id === -1)}
        type="checkbox"
        className="form-check-input"
      />
      <label className="form-check-label">{cat.name}</label>
    </li>
  ));
};

export default Checkbox;
