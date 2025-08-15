import React from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "Shibuya"];
  // items = [];

  function getMessage() {
    return items.length === 0 && <p>No items found</p>;
  }

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {getMessage()}
        {items.map((item) => (
          <React.Fragment key={item}>
            {" "}
            <li onClick={() => console.log(item)} className="list-group-item">
              {item}
            </li>
            <p>Hello World</p>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
