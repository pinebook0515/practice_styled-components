import React from "react";
import styled from "styled-components";

export default props => {
  const { toggleModalHandler } = props;
  return (
    <Wrapper>
      <BtnText />
      <Btn onClick={toggleModalHandler}>+</Btn>
    </Wrapper>
  );
};

// CSSの定義
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const BtnText = styled.span`
  font-weight: bold;
  font-size: 1.8rem;
  margin-right: 15px;
`;

const Btn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 3px 5px 0px #cccccc;
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: bold;
  background: #47c106;
  border: none;
`;
