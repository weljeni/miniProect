import React, { useState } from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";
import FormList from "./components/FormList";
import Receipts from "./components/Receipts";



function App() {
  const [task, setTask] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  function handleTask(newObj) {
    let newTodos = [...task]
    newTodos.push(newObj)
    setTask(newTodos)
  }
  return (
    <div className="App">
      <Counter />
      <Receipts />

      {isLogin ? (
        <FormList setIsLogin={setIsLogin} task={task} />
      ) : (
        <Form setIsLogin={setIsLogin} handleTask={handleTask} />)}

    </div>
  );
}

export default App;
