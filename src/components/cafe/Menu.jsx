import { useState } from "react";
import Item from "./Item";
import OrderModal from "./OrderModal";
import * as S from "./Cafe.style.js";

function Menu({ menu, cart, setCart }) {
  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);
  if (!menu) return <div style={{ textAlign: "center", margin: "80px" }}>메뉴 정보가 없어요!</div>;

  const categorys = Object.keys(menu);
  return (
    <>
      {categorys.map((category) => {
        return (
          <section key={category}>
            <h2>{category}</h2>
            <S.Menu>
              {menu[category].map((item) => (
                <Item
                  key={item.name}
                  item={item}
                  clickHandler={() => {
                    setModalMenu(item);
                    setModalOn(true);
                  }}
                />
              ))}
            </S.Menu>
          </section>
        );
      })}
      {modalOn ? (
        <OrderModal modalMenu={modalMenu} setModalOn={setModalOn} cart={cart} setCart={setCart} />
      ) : null}
    </>
  );
}

export default Menu;
