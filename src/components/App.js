import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function implementAddTodoList(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }

  function deleteTodo(idx) {
    const newTodoList = todoList.filter((item, index) => index !== idx);
    setTodoList(newTodoList);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p> To Do List </p>
        <form onSubmit={implementAddTodoList}>
          <input type="text" placeholder="Enter Task" onChange={(e) => setTodo(e.target.value)} value={todo}/>
          <button type="submit"> To do </button>
        </form> 
      
      {
        todoList.map((item, index) => (
          <div>
            <ul>
              <div> 
                {item} 
                <button onClick={() => deleteTodo(index)}> Delete </button>
              </div>
            </ul>  
          </div>
        ))
      }

    </div>
  )
}

export default App;