function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "Shibuya"];
  items = [];

  function getMessage() {
    return items.length === 0 && <p>No items found</p>;
  }

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {getMessage()}
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
