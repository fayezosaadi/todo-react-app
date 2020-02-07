import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";
import TodoHeader from "./components/TodoHeader";
const localStorage = require("local-storage");

const currentItemInitialState = { text: '', id: '', isCompleted: false };

const useStateWithLocalStorage = localStorageKey => {
  const [items, setItems] = useState(JSON.parse(localStorage.get(localStorageKey)) || []);

  useEffect(() => { localStorage.set('items', JSON.stringify(items)) }, [items]);

  return [items, setItems];
};

const App = () => {
  const [ items, setItems ] = useStateWithLocalStorage('items');
  const [ hide, setHide ] = useState(false );
  const [ currentItem, setCurrentItem ] = useState(currentItemInitialState);

  const handleInput = e => {
    const { target: { value } } = e;
    setCurrentItem(item => ({ ...item, text: value, id: uuid() }));
};

  const addItem = e => {
    e.preventDefault();

    if (currentItem.text) {
      setItems(itemsList => [...itemsList, currentItem]);
      setCurrentItem(currentItemInitialState);
    }
  };

  const deleteItem = (e, id) => {
    e.preventDefault();

    setItems(items.filter(item => item.id !== id))
  };

  const completeTodo = (e, i) => {
    const { target: { type, checked, value, name } } = e;
    const newTodos = [...items];
    newTodos[i][name] = type === 'checkbox' ? checked : value;
    setItems(newTodos)
  };

  const hideCompleted = (e) => {
    const { target: { type, checked, value } } = e;
    setHide(type === 'checkbox' ? checked : value)
  };

  return (
    <div className="App">
      <div className="todoListMain">
        <TodoHeader hide={hide} hideCompleted={hideCompleted} />
        <TodoInput addItem={addItem} handleInput={handleInput} currentItem={currentItem} />
        <TodoItems items={items} deleteItem={deleteItem} completeTodo={completeTodo} hide={hide} />
      </div>
    </div>
  );
};

export default App;
