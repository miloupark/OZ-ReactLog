import { Link } from "react-router-dom";
import * as S from "./Cafe.style.js";

export default function Header() {
  return (
    <S.Header>
      <h1>🥃 Cafe</h1>
      <S.Menu>
        <Link to="/cafe">메인</Link>
        <Link to="/cafe/cart">장바구니</Link>
      </S.Menu>
    </S.Header>
  );
}
