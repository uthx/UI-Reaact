import React, { useState } from "react";
import axios from "axios";
import PostForm from "./PostForm";
const Data = ({ id, price, title, setIsDeleted }) => {
  const [displaySubmit, setDisplaySubmit] = useState(false);

  const url = `http://localhost:4000/item/delete/${id}`;
  const deleteHandler = async (id) => {
    await axios.delete(url);
    setIsDeleted(true);
    console.log(id);
  };

  const updateHandler = () => {
    setDisplaySubmit(true);
  };
  return (
    <div>
      <h1>Id: {id}</h1>
      <h1>Title: {title}</h1>
      <h1>Price: {price}</h1>
      <button onClick={() => deleteHandler(id)}>delete</button>
      <button onClick={updateHandler}>Update</button>
      {displaySubmit ? <PostForm setDisplaySubmit={setDisplaySubmit} /> : null}
    </div>
  );
};

export default Data;
