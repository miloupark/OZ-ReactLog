import "./App.css";

const fruits = [
  { name: "strawberry", color: "red", size: 2 },
  { name: "banana", color: "yellow", size: 5 },
  { name: "kiwi", color: "green", size: 3 },
  { name: "apple", color: "red", size: 4 },
  { name: "blueberry", color: "blue", size: 1 },
  { name: "orange", color: "orange", size: 4 },
  { name: "grape", color: "purple", size: 2 },
  { name: "lemon", color: "yellow", size: 3 },
  { name: "cherry", color: "red", size: 2 },
  { name: "watermelon", color: "green", size: 8 },
];

function YellowFruits() {
  return (
    <>
      {fruits
        .filter((fruit) => fruit.color === "yellow")
        .map((fruit) => {
          return (
            <div key={fruit.name}>
              name: {fruit.name}, color: {fruit.color}, size: {fruit.size}
            </div>
          );
        })}
    </>
  );
}

function FruitsList() {
  return (
    <>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.name}>
            name: {fruit.name}, color: {fruit.color}, size: {fruit.size}
          </div>
        );
      })}
    </>
  );
}

function App() {
  return (
    <>
      <FruitsList />
      <YellowFruits />
    </>
  );
}

export default App;
