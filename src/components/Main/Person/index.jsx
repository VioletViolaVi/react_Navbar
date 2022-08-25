import React from "react";

const Person = (props) => {
  return (
    <>
      <h1>First Name: {props.fName}</h1>
      <h2>Last Name: {props.lName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
};

export default Person;
