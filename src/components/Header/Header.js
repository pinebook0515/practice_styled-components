import React from "react";
import styled from "styled-components";

export default props => {
  return (
    <Header>
      <Inner>
        <FlexSpaceBetween>
          <Logo>TEST::PROJECT</Logo>
          <Gnav>
            <li>
              <a href="">新規アカウント登録</a>
            </li>
            <li>
              <a href="">ログアウト</a>
            </li>
          </Gnav>
        </FlexSpaceBetween>
      </Inner>
    </Header>
  );
};

// CSSの定義
const Header = styled.header`
  box-shadow: 0px 4px 5px 0px #cccccc;
  background: #ffffff;
  padding: 20px 0;
  margin-bottom: 30px;
`;

const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const FlexSpaceBetween = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1``;

const Gnav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  li {
    margin-left: 20px;
    a {
      font-size: 1.4rem;
    }
  }
`;
