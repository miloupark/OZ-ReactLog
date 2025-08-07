import "./App.css";

function App() {
  let counter = 0;
  return (
    <>
      <div>counter : {counter}</div>
      <button
        onClick={() => {
          counter += 1;
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          counter -= 1;
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
