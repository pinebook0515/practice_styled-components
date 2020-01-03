import React from "react";
import styled from "styled-components";

export default props => {
  const {
    terms,
    rooms,
    lessons,
    mentors,
    name,
    term,
    room,
    lesson,
    mentor,
    url,
    handleSubmit,
    handleChange,
    toggleModalHandler
  } = props;

  // 期数をmapでリスト化
  const termList = terms.map((term, index) => {
    return (
      <Option key={index} value={term}>
        {term}
      </Option>
    );
  });

  // 教室をmapでリスト化
  const filterdRoomList = rooms.filter(room => room.id !== 0);
  const roomList = filterdRoomList.map((room, index) => {
    return (
      <Option key={index} value={room.id}>
        {room.name}
      </Option>
    );
  });

  // レッスンをmapでリスト化
  const lessonList = lessons.map((lesson, index) => {
    return (
      <Option key={index} value={lesson.id}>
        {lesson.name}
      </Option>
    );
  });

  // メンターをmapでリスト化
  const mentorList = mentors.map((mentor, index) => {
    return (
      <Option key={index} value={mentor.id}>
        {mentor.name}
      </Option>
    );
  });

  return (
    <Wrapper>
      <Modal>
        <Form onSubmit={handleSubmit}>
          <CloseBtn onClick={toggleModalHandler} />
          <label htmlFor="name">名前</label>
          <InputTextName
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />

          <label htmlFor="term">期数</label>
          <Select name="term" value={term} onChange={handleChange}>
            {termList}
          </Select>

          <label htmlFor="lesson">教室</label>
          <Select name="room" value={room} onChange={handleChange}>
            {roomList}
          </Select>

          <label htmlFor="lesson">受講中のレッスン</label>
          <Select name="lesson" value={lesson} onChange={handleChange}>
            {lessonList}
          </Select>

          <label htmlFor="montor">担当メンター</label>
          <Select name="mentor" value={mentor} onChange={handleChange}>
            {mentorList}
          </Select>

          <label htmlFor="url">TM URL</label>
          <InputTextUrl
            type="text"
            name="url"
            value={url}
            onChange={handleChange}
          />
          <Submit type="submit" value="登録" />
        </Form>
      </Modal>
      <Overlay />
    </Wrapper>
  );
};

// CSSの定義
const Wrapper = styled.div``;

const Modal = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  padding: 20px 30px;
  z-index: 100;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  label {
    font-size: 1.4rem;
  }
`;

const CloseBtn = styled.i.attrs({
  className: "fas fa-times"
})`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const InputTextName = styled.input`
  width: 50%;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #e8e8e8;
  display: block;
`;

const InputTextUrl = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #e8e8e8;
  display: block;
`;

const Select = styled.select`
  margin-bottom: 10px;
  font: 400 1.1rem system-ui;
`;

const Option = styled.option``;

const Submit = styled.input`
  border: none;
  background: #1c7cd5;
  border-radius: 4px;
  font-size: 1.2rem;
  padding: 5px 20px;
  color: #fff;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Overlay = styled.div`
  z-index: 1;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.75);
`;
