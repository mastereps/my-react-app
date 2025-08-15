import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "Shibuya"];
  // items = [];

  const getMessage = () => items.length === 0 && <p>No items found</p>;

  const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {getMessage()}
        {items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
