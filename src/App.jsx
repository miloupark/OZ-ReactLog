import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "밥 먹기" },
    { id: 1, content: "코딩 공부하기" },
    { id: 2, content: "잠 자기" },
  ]);

  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
