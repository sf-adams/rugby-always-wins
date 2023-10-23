"use client";

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    user: "",
    game1: "",
    game1FirstTry: "",
    game2: "",
    game2FirstTry: "",
    game3: "",
    game3FirstTry: "",
  });

  function handleChange(event: any) {
    const {name, value} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value

      }});
  }

  function handleSubmit(event:any ) {
    event.preventDefault()
    console.log(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" onChange={handleChange} name="user" value={formData.user}/>
        <button>Try it</button>
      </form>
      <h1></h1>
    </>
  );
};

export default Form;
