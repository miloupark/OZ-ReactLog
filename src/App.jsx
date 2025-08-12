import CounterClass from "./_notes/CounterClass";
import CounterFunction from "./_notes/CounterFunction";
import StateChangePri from "./_notes/StateChangePri";
import StateChangeRef from "./_notes/StateChangeRef";

function App() {
  return (
    <>
      <div>
        <h1>Class</h1>
        <CounterClass />
      </div>
      <div>
        <h1>Function</h1>
        <CounterFunction />
      </div>
      <div>
        <h1>StateChange Primitive</h1>
        <StateChangePri />
      </div>
      <div>
        <h1>StateChange Reference</h1>
        <StateChangeRef />
      </div>
    </>
  );
}

export default App;
