import styled from "styled-components";

const roleStyles = {
  provider: { bg: "#192524", border: "#3AA097", text: "#E6E7EB" },
  consumer: { bg: "#1B1C2A", border: "#7E86F9", text: "#E6E7EB" },
  updater: { bg: "#26181B", border: "#F291A0", text: "#E6E7EB" },
  neutral: { bg: "#1b1b1f", border: "#cccccc", text: "#E6E7EB" },
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Component = styled.div`
  display: grid;
  min-width: 80px;
  min-height: 80px;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
  gap: 8px;
  padding: 24px;
  margin: 12px;
  border: 2px solid ${({ $role }) => roleStyles[$role]?.border ?? "#eeeeee"};
  border-radius: 10px;
  color: ${({ $role }) => roleStyles[$role]?.text ?? "#FFFFFF"};
  background: ${({ $role }) => roleStyles[$role]?.bg ?? "#1b1b1f"};
`;

export const Outer = styled.div`
  display: grid;
  place-items: center;
`;
