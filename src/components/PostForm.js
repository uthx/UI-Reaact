import React, { useState, useRef } from "react";
import axios from "axios";
import uuid from "uuid";

const PostForm = ({ setDisplaySubmit }) => {
  const [postData, setPostData] = useState({ id: "", price: "", title: "" });
  const idRef = useRef(null);
  const priceRef = useRef(null);
  const titleRef = useRef(null);
  // const changeHandler = (e) => {
  //   setPostData({ ...postData, [e.target.name]: e.target.value });
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(postData);
    axios
      .put("http://localhost:4000/item/update", {
        id: parseInt(idRef.current.value),
        title: titleRef.current.value,
        price: parseInt(priceRef.current.value),
      })
      .then((res) => {
        console.log(res);
      });

    setDisplaySubmit(false);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">ID:</label>

          <input type="number" name="id" ref={idRef} placeholder="Enter ID" />
        </div>

        <div>
          <label htmlFor="">Title:</label>

          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            ref={titleRef}
          />
        </div>

        <div>
          <label htmlFor="">Price:</label>

          <input
            type="number"
            name="price"
            placeholder="Enter Price"
            ref={priceRef}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
