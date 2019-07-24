import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import TodoHeader from "./compos/TodoHeader.js";
import TodoList from "./compos/TodoList.js"
import DoneList from "./compos/DoneList.js"

const someStyle = {
  margin:"50px 200px"
}

function App() {
  return (
    <Provider store={store}>
    <div style={someStyle}>
      <TodoHeader />
      <TodoList />
      <DoneList />
    </div>
      
    </Provider >
  );
}

export default App;
