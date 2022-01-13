import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../../context/ProductContext";
import './EditProducts.css'

const EditProducts = () => {
  const { data, editPaintingDetails } = useContext(productsContext);

  const [image, setImage] = useState(data.image);
  const [name, setName] = useState(data.name);
  const [artistsName, setArtistsName] = useState(data.artistsName);
  const [price, setPrice] = useState(data.price);
  const [description, setDescription] = useState(data.description);

  function handleEdit() {
    const editedProduct = {
      image,
      name,
      artistsName: artistsName,
      price,
      description,
    };
    editPaintingDetails(editedProduct);
  }

  return (
    <div className="edit-details">
      <form action="">
        <input
          type="text"
          value={image}
          placeholder="image"
          onChange={(e) => setImage(e.target.value)}
        /><br/>
        <input
          type="text"
          value={name}
          placeholder="paintings name"
          onChange={(e) => setName(e.target.value)}
        /><br/>
        <input
          type="text"
          value={artistsName}
          placeholder="artist name"
          onChange={(e) => setArtistsName(e.target.value)}
        /><br/>
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        /><br/>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br/>
        <Link to={`/product/${data.id}`}>
          <button onClick={handleEdit}>save</button><br/>
        </Link>
      </form>
    </div>
  );
};

export default EditProducts;