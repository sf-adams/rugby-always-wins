'use client'

import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstName(event: any) {
    setFirstName(event.target.value);
  }

  function handleLastName(event: any) {
    setLastName(event.target.value);
  }

  return (
    <>
      <form>
        <input type="text" placeholder="First Name" onChange={handleFirstName} />
        <input type="text" placeholder="Last Name" onChange={handleLastName} />
      </form>
      <h1>{firstName} {lastName}</h1>
    </>
  );
};

export default Form;
