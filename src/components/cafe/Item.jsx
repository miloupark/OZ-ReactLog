import * as S from "./Cafe.style.js";

function Item({ item, clickHandler }) {
  return (
    <S.Item onClick={clickHandler}>
      <img width={50} src={item.img} />
      <section>
        <div>{item.name}</div>
        <div>{item.price}원</div>
      </section>
    </S.Item>
  );
}

export default Item;
