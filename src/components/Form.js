import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({});

  const handleInput = (e) => {
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <form className="bg-slate-600 p-10 flex flex-col items-center">
        <div className="m-2 p-2 grid grid-cols-2 w-[20%]">
          <label>Name</label>
          <input type="text" onChange={handleInput} name="name" />
        </div>
        <div>
          <label>Age</label>
          <input type="number" onChange={handleInput} name="age" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" onChange={handleInput} name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={handleInput} name="password" />
        </div>
        <div>
          <input type="submit" onClick={handleSubmit} />
        </div>
      </form>
    </>
  );
};

export default Form;
