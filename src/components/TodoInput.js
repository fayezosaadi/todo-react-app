import React from 'react';

const TodoInput = ({ addItem, handleInput, currentItem }) => {
  return (
      <div>
        <form className="todoInputForm" onSubmit={addItem}>
          <input placeholder="Type to add new tasks" onChange={handleInput} value={currentItem.text} />
        </form>
    </div>
  );
};

export default TodoInput;
