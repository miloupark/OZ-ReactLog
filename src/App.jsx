import "./App.css";

function App() {
  return (
    <>
      <SuperDuperMegaCheeseBurger />
    </>
  );
}

function SuperDuperMegaCheeseBurger() {
  return (
    <>
      <Bun />
      <Patty />
      <Lettuce />
      <Tomato />
      <Cheese />
      <Patty />
      <Cheese />
      <Patty />
      <Cheese />
      <Patty />
      <Cheese />
      <Patty />
      <Bun />
    </>
  );
}

function Bun() {
  return (
    <div className="bun">
      Flour
      <span> Water</span>
      <span> Egg</span>
      <span> Yeast</span>
    </div>
  );
}

function Patty() {
  return (
    <div className="patty">
      Beef
      <span> Pepper</span>
      <span> Salt</span>
    </div>
  );
}

function Lettuce() {
  return (
    <div className="lettuce">
      Leaf
      <span> Stem</span>
    </div>
  );
}

function Tomato() {
  return (
    <div className="tomato">
      tomato
      <span> Skin</span>
      <span> Flesh</span>
      <span> Seeds</span>
    </div>
  );
}

function Cheese() {
  return (
    <div className="cheese">
      Milk
      <span> Salt</span>
      <span> Coloring</span>
    </div>
  );
}

export default App;
