import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import "../styles.css";

const API_URL = "http://localhost:3000/products";

const ProductGallery = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const addProduct = (newProduct) => {
    axios.post(API_URL, newProduct)
      .then(response => setProducts([...products, response.data]))
      .catch(error => console.error("Error adding product:", error));
  };

  const updateProduct = (updatedProduct) => {
    axios.put(`${API_URL}/${updatedProduct.id}`, updatedProduct)
      .then(response => {
        setProducts(products.map(product => 
          product.id === updatedProduct.id ? response.data : product
        ));
        setEditingProduct(null);
      })
      .catch(error => console.error("Error updating product:", error));
  };

  const deleteProduct = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => setProducts(products.filter(product => product.id !== id)))
      .catch(error => console.error("Error deleting product:", error));
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Product Gallery</h1>
      <div className="top-bar">
        <button onClick={() => setEditingProduct({})}>Add Product</button>
        <input type="text" placeholder="Search..." onChange={(e) => setSearchQuery(e.target.value)} />
      </div>

      {editingProduct && (
        <ProductForm product={editingProduct} onSave={editingProduct.id ? updateProduct : addProduct} onCancel={() => setEditingProduct(null)} />
      )}

      <div className="grid-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} onClick={() => setEditingProduct(product)} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
