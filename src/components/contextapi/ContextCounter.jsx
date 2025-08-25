import * as S from "../contextapi/ContextCounter.style";
import { useCounter } from "../../context/counter/counterContext";

export default function ContextCounter() {
  return (
    <>
      <S.Outer>
        <S.Container $role="provider">
          <S.Component $role="provider">
            App
            <S.Container>
              <Child1 />
              <Child2 />
            </S.Container>
          </S.Component>
        </S.Container>
      </S.Outer>
    </>
  );
}

function Child1() {
  console.log("Child1");
  return (
    <S.Component $role="neutral">
      Child1
      <S.Container>
        <Child3 />
        <Child4 />
      </S.Container>
    </S.Component>
  );
}

function Child2() {
  console.log("Child2");
  return (
    <S.Component $role="neutral">
      Child2
      <S.Container>
        <Child5 />
        <Child6 />
      </S.Container>
    </S.Component>
  );
}

function Child3() {
  const { counter } = useCounter();
  console.log("Child3");
  return (
    <S.Component $role="consumer">
      Child3 : <span>{counter}</span>
    </S.Component>
  );
}

function Child4() {
  console.log("Child4");
  return <S.Component $role="neutral">Child4</S.Component>;
}

function Child5() {
  console.log("Child5");
  return <S.Component $role="neutral">Child5</S.Component>;
}

function Child6() {
  const { setCounter } = useCounter();
  console.log("Child6");

  return (
    <S.Component $role="updater">
      Child6
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </S.Component>
  );
}
