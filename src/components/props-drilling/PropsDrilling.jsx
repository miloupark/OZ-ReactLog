import { useState } from "react";
import * as S from "../props-drilling/PropsDrilling.style";

export default function PropsDrilling() {
  const [counter, setCounter] = useState(0);
  console.log("App");

  return (
    <>
      <S.Outer>
        <S.Legend>
          <S.Badge $role="owner">owner(App)</S.Badge>
          <S.Badge $role="consumer">consumer(counter)</S.Badge>
          <S.Badge $role="intermediate">intermediate(pass down)</S.Badge>
          <S.Badge $role="updater">updater(setCounter)</S.Badge>
        </S.Legend>

        <S.Container $role="owner">
          <S.Component $role="owner">
            Props Drilling
            <S.Container>
              <Child1 counter={counter} />
              <Child2 counter={counter} setCounter={setCounter} />
            </S.Container>
          </S.Component>
        </S.Container>
      </S.Outer>
    </>
  );
}

function Child1({ counter }) {
  console.log("Child1");
  return (
    <S.Component $role="consumer">
      Child1
      <S.Container>
        <Child3 counter={counter} />
        <Child4 />
      </S.Container>
    </S.Component>
  );
}

function Child2({ counter, setCounter }) {
  console.log("Child2");
  return (
    <S.Component $role="intermediate">
      Child2
      <S.Container>
        <Child5 />
        <Child6 counter={counter} setCounter={setCounter} />
      </S.Container>
    </S.Component>
  );
}

function Child3({ counter }) {
  console.log("Child3");
  return (
    <S.Component $role="consumer">
      Child3 : <span> {counter}</span>
    </S.Component>
  );
}

function Child4() {
  console.log("Child4");
  return <S.Component>Child4</S.Component>;
}

function Child5() {
  console.log("Child5");
  return <S.Component>Child5</S.Component>;
}

function Child6({ counter, setCounter }) {
  console.log("Child6");
  return (
    <S.Component $role="updater">
      Child6
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </S.Component>
  );
}
