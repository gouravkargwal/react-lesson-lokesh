import React from "react";

const Person = () => {
  let name = "Lokesh";

  const handleClick = (name, e) => {
    console.log(name);
    console.log(e.target);
  };

  return (
    <>
      <h1 className="title1">My name is {name}</h1>
      <p>My age is 12</p>
      <button
        onClick={(e) => {
          handleClick(name, e);
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default Person;
