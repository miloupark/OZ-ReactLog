import styled from "styled-components";

export const Header = styled.header`
  border-bottom: 3px double gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  img {
    height: 60%;
    object-fit: contain;
  }

  div {
    text-align: center;

    &:first-child {
      font-weight: 600;
    }
    &:last-child {
      font-weight: 200;
      font-size: 0.9rem;
    }
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  inset: 0;
  display: grid;
  place-items: center;
`;

export const Modal = styled.div`
  width: min(80%, 400px);
  height: 380px;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    height: 120px;
    margin: 10px;
    border-radius: 8px;
  }

  div {
    h3 {
      margin: 0 0 10px 0;
      color: #333;
    }

    div {
      color: #666;
      font-size: 0.9rem;
    }
  }
`;

export const OptionsList = styled.ul`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

export const OptionItem = styled.li`
  font-size: 1rem;
  font-weight: 600;

  ul {
    margin-top: 5px;
  }

  li {
    font-weight: 300;
    font-size: 0.8rem;
    margin-bottom: 5px;
  }
`;

export const SubmitSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 50px;
    margin: 10px;
  }

  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const CartContainer = styled.div`
  padding: 20px;
  text-align: center;
  color: #666;
`;

export const CartItem = styled.li`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  position: relative;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  .cart-item-info {
    display: flex;
    align-items: center;
    gap: 10px;

    div {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }

  .cart-item-option {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .cart-item-delete {
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 4px 8px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #c82333;
    }
  }
`;
