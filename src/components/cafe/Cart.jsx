import cafedata from "../../assets/cafedata";
import * as S from "./Cafe.style.js";

function Cart({ menu, cart, setCart }) {
  if (!menu) return <div style={{ textAlign: "center", margin: "80px" }}>메뉴 정보가 없어요!</div>;
  const allMenus = [...menu.커피, ...menu.논커피];
  return (
    <>
      <h2>장바구니</h2>
      <S.Menu>
        {cart?.length ? (
          cart.map((el, index) => (
            <CartItemComponent
              key={`${el.id}-${JSON.stringify(el.options)}-${index}`}
              item={allMenus.find((menu) => menu.id === el.id)}
              options={el.options}
              quantity={el.quantity}
              cart={cart}
              setCart={setCart}
              index={index}
            />
          ))
        ) : (
          <S.CartContainer>
            <div className="no-item">장바구니에 담긴 상품이 없어요!</div>
          </S.CartContainer>
        )}
      </S.Menu>
    </>
  );
}

function CartItemComponent({ item, options, quantity, cart, setCart, index }) {
  return (
    <S.CartItem>
      <div className="cart-item-info">
        <img height={100} src={item.img} />
        <div>{item.name}</div>
      </div>
      <div className="cart-item-option">
        {Object.keys(options).map((el) => (
          <div key={el}>
            {el} : {cafedata.options[el][options[el]]}
          </div>
        ))}
        <div>개수 : {quantity}</div>
      </div>
      <button
        className="cart-item-delete"
        onClick={() => {
          setCart(cart.filter((_, i) => i !== index));
        }}
      >
        삭제
      </button>
    </S.CartItem>
  );
}

export default Cart;
