const Checkbox = ({ categories = {} }) => {
  return categories.map((cat, index) => (
    <li key={index} className="list-unstyled">
      <input type="checkbox" className="form-check-input" />
      <label className="form-check-label">{cat.name}</label>
    </li>
  ));
};

export default Checkbox;
