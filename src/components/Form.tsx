"use client";

import { useState } from "react";
import styles from "../app/page.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    score: "",
    firstTry: "",
  });

  function handleChange(event: any) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          className={styles.formFirstName}
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />

        <fieldset>
          <legend>Who do you think will score the first try?</legend>
          <select
            name="firstTry"
            onChange={handleChange}
            value={formData.firstTry}
          >
            <option value="">-- Choose --</option>
            <option value="Joe Marler">Joe Marler</option>
            <option value="Jamie George">Jamie George</option>
            <option value="Dan Cole">Dan Cole</option>
            <option value="Maro Itoje">Maro Itoje</option>
            <option value="Tom Curry">Tom Curry</option>
          </select>
        </fieldset>

        <button className="form__button">Try it</button>
      </form>
    </>
  );
};

export default Form;
