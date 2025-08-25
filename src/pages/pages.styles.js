import styled from "styled-components";

export const PagesTitle = styled.h2`
  color: #fff;
  padding-block: 20px;
  text-align: center;

  /* 같은 부모 안에서 첫 번재를 제외한 모든 h2 */
  &:not(:first-of-type) {
    margin-top: 80px;
    padding-top: 80px;
    border-top: 1px solid #cccccc;
  }
`;
