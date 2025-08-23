import { useState } from "react";
import cafedata from "../../assets/cafedata";
import * as S from "./Cafe.style.js";

function OrderModal({ modalMenu, setModalOn, cart, setCart }) {
  const [options, setOptions] = useState({ 온도: 0, 진하기: 0, 사이즈: 0 });
  const [quantity, setQuantity] = useState(1);
  const itemOptions = cafedata.options;

  return (
    <>
      {modalMenu ? (
        <S.ModalBackdrop onClick={() => setModalOn(false)}>
          <S.Modal onClick={(e) => e.stopPropagation()}>
            <S.ModalContent>
              <img src={modalMenu.img} />
              <div>
                <h3>{modalMenu.name}</h3>
                <div>{modalMenu.description}</div>
              </div>
            </S.ModalContent>

            <S.OptionsList>
              {Object.keys(itemOptions).map((el) => (
                <Option
                  key={el}
                  options={options}
                  setOptions={setOptions}
                  name={el}
                  itemOptions={itemOptions[el]}
                />
              ))}
            </S.OptionsList>

            <S.SubmitSection>
              <div>
                <label htmlFor="count">개수</label>
                <input
                  id="count"
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={(event) => setQuantity(Number(event.target.value))}
                />
              </div>
              <button
                onClick={() => {
                  // 같은 아이템과 같은 옵션 조합이 이미 있는지 확인
                  const existingItemIndex = cart.findIndex(
                    (item) =>
                      item.id === modalMenu.id &&
                      JSON.stringify(item.options) === JSON.stringify(options)
                  );

                  if (existingItemIndex >= 0) {
                    // 이미 같은 옵션의 아이템이 있으면 수량 증가
                    const updatedCart = [...cart];
                    updatedCart[existingItemIndex].quantity += quantity;
                    setCart(updatedCart);
                  } else {
                    // 새로운 아이템 추가
                    setCart([...cart, { options, quantity, id: modalMenu.id }]);
                  }
                  setModalOn(false);
                }}
              >
                장바구니 넣기
              </button>
            </S.SubmitSection>
          </S.Modal>
        </S.ModalBackdrop>
      ) : null}
    </>
  );
}

function Option({ name, options, setOptions, itemOptions }) {
  return (
    <S.OptionItem>
      {name}
      <ul>
        {itemOptions.map((option, idx) => (
          <li key={option}>
            <input
              type="radio"
              name={name}
              checked={options[name] === idx}
              onChange={() => setOptions({ ...options, [name]: idx })}
            />
            {option}
          </li>
        ))}
      </ul>
    </S.OptionItem>
  );
}

export default OrderModal;
