import React, { useState } from "react";

const ProductForm = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState(product || { name: "", description: "", price: "", image: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
      <button onClick={() => onSave(formData)}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ProductForm;
