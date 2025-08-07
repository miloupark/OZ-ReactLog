import { Component } from "react";
import "../../src/App.css";

class CounterClass extends Component {
  state = { counter: 0 };
  render() {
    return (
      <>
        <Count counter={this.state.counter} />
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
      </>
    );
  }
}

class Count extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>counter: {this.props.counter}</div>;
  }
}
console.log;

export default CounterClass;
