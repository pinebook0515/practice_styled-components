import React from "react";
import styled from "styled-components";

export default props => {
  const { rooms, currentRoom, changeTabHandler } = props;
  const roomList = rooms.map(room => {
    return (
      <TabItem
        data-room-id={room.id}
        key={room.id}
        className={
          room.id === currentRoom ? "tab-list__item active" : "tab-list__item"
        }
        onClick={changeTabHandler}
      >
        {room.name}
      </TabItem>
    );
  });

  return <Tabs>{roomList}</Tabs>;
};

// CSSの定義
const Tabs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

const TabItem = styled.li`
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  background: #a7a7a7;
  padding: 5px 10px;
  margin-right: 4px;
  border-radius: 10px 10px 0 0;
  width: 100px;
  cursor: pointer;
  &.active {
    color: #707070;
    background: #ffffff;
  }
`;
