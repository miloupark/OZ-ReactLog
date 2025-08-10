import { Component } from "react";
import "../../src/App.css";

class CounterClass extends Component {
  state = { counter: 0 };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <>
        <Count counter={this.state.counter} />
        <PlusButton incrementCounter={this.incrementCounter} />
        <MinusButton decrementCounter={this.decrementCounter} />
      </>
    );
  }
}

class PlusButton extends Component {
  render() {
    return <button onClick={this.props.incrementCounter}>+</button>;
  }
}
class MinusButton extends Component {
  render() {
    return <button onClick={this.props.decrementCounter}>-</button>;
  }
}

class Count extends Component {
  render() {
    return <div>counter: {this.props.counter}</div>;
  }
}
console.log;

export default CounterClass;
