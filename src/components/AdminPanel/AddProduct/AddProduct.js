import React, { useState, useContext } from "react";
import { productsContext } from "../../../context/ProductContext";
import './AddProduct.css'

const AddProduct = () => {
  const { addPaintings } = useContext(productsContext);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [artistsName, setArtistsName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleAdd() {
    const product = {
      image,
      name,
      artistsName,
      price,
      description,
    };
    addPaintings(product);
  }

  return (
    <div className="add-text">
      <form action="">
        <input
          type="text"
          placeholder="image"
          onChange={(e) => setImage(e.target.value)}
        /><br/>
        <input
          type="text"
          placeholder="paintings name"
          onChange={(e) => setName(e.target.value)}
        /><br/>
        <input
          type="text"
          placeholder="artist name"
          onChange={(e) => setArtistsName(e.target.value)}
        /><br/>
        <input
          type="text"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        /><br/>
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        /><br/>
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
