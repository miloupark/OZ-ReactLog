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

// constructor 생략: 따로 오버라이딩하지 않으면 기본 생성자가 자동으로 사용됨
// super(props) 없이도 props 접근 가능 (기본 처리)
// props는 this.props로 직접 접근
class Count extends Component {
  render() {
    return <div>counter: {this.props.counter}</div>;
  }
}
console.log;

export default CounterClass;
