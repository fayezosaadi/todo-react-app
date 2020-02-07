import React from 'react';

const TodoInput = ({ addItem, handleInput, text }) => {
  return (
      <div>
        <form className="todoInputForm" onSubmit={addItem}>
          <input placeholder="Type to add new tasks" onChange={handleInput} value={text} />
        </form>
    </div>
  );
};

export default TodoInput;
