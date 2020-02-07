import React from 'react';

const TodoHeader = ({ hide, hideCompleted }) => {
  return (
    <div className="todoListHeader">
      <h3>Todo List (1)</h3>
        <form>
          <label className="hide">
            <input name="hide" type="checkbox" checked={hide} onChange={hideCompleted} />
            Hide Completed Tasks
          </label>
        </form>
    </div>
  );
};

export default TodoHeader;
