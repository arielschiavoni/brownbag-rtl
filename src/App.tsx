import React from "react";
import "./App.css";
import { createTodo, Todo } from "./api";

export function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [text, setText] = React.useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (text.length <= 0) return;

    const todo = {
      id: Date.now(),
      text,
    };

    // sync examples
    setText("");
    setTodos([...todos, todo]);

    // async examples with fake api
    // createTodo(todo).then((todo) => {
    //   setText("");
    //   setTodos([...todos, todo]);
    // });
  }

  const hats = { title: "Favorite Hats", contents: "Fedoras are classy" };
  const footware = {
    title: "Favorite Footware",
    contents: "Flipflops are the best",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/octopus-64x64.png" alt="logo" className="App-logo" />
        <a
          className="App-link"
          href="https://testing-library.com/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React Testing Library
        </a>
      </header>

      <main>
        <h1>My TODOs</h1>

        {todos.length > 0 ? (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
        ) : (
          <p>🏝 Nothing to do! 🏝</p>
        )}

        <hr />

        <form onSubmit={handleSubmit}>
          <label htmlFor="new-todo">
            What's the next thing you have to do?
          </label>
          <br />
          <br />
          <input
            id="new-todo"
            type="text"
            onChange={handleChange}
            value={text}
          />
          <button>Add todo</button>
        </form>
      </main>
    </div>
  );
}
