import React from 'react';

const TodoItems = ({ items, deleteItem, completeTodo, hide }) => {

  const displayList = (item, i) =>
    <form key={i} style={{ display: hide && item.isCompleted === true ? "none" : "" }}>
      <label style={{ textDecoration: item.isCompleted ? "line-through" : "" }}>
        <div className="listItem">
          <div className="listItemText">
            <input name="isCompleted" type="checkbox" checked={item.isCompleted} onChange={(e) => completeTodo(e, i)} />
            {item.text}
          </div>
          <div>
            <button onClick={(e) => deleteItem(e, item.id)}>x</button>
          </div>
        </div>
        <br />
      </label>
    </form>;

  const listItems = items.map(displayList);

  return <div className="theList">{listItems}</div>
};

export default TodoItems;
