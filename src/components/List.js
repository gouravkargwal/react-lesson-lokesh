import React, { useState, useEffect } from "react";

const List = () => {
  const [x, setX] = useState();

  useEffect(() => {
    fetch("https://catfact.ninja/facts")
      .then((response) => response.json())
      .then((data) => {
        setX(data.data);
      });
  }, []);

  console.log(x);

  // if (x) {
  // } else {
  // }

  // x ? "hello" : "world";

  // && and ||

  return (
    <>
      {x &&
        x.map((object, index) => {
          return (
            <>
              <li key={index}>{object.fact}</li>
            </>
          );
        })}
    </>
  );
};

export default List;
