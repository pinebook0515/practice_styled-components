import React from "react";
import styled from "styled-components";
import AddStudentBtn from "./AddStudentBtn";
import Tabs from "./Tabs";
import Table from "./Table";
import Modal from "./Modal";

export default props => {
  const {
    students,
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
    currentRoom,
    isModalOpen,
    editStudent,
    deleteStudent,
    handleSubmit,
    handleChange,
    toggleModalHandler,
    changeTabHandler,
    filterStudentsHandler
  } = props;

  // isModalOpenがtrue/falseでModal表示を切り替え
  let modal = isModalOpen ? (
    <Modal
      terms={terms}
      rooms={rooms}
      lessons={lessons}
      mentors={mentors}
      name={name}
      term={term}
      room={room}
      lesson={lesson}
      mentor={mentor}
      url={url}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      toggleModalHandler={toggleModalHandler}
    />
  ) : (
    ""
  );

  return (
    <Main>
      <Inner>
        <AddStudentBtn toggleModalHandler={toggleModalHandler} />
        <Tabs
          rooms={rooms}
          currentRoom={currentRoom}
          changeTabHandler={changeTabHandler}
        />
        <Table
          students={students}
          editStudent={editStudent}
          deleteStudent={deleteStudent}
          filterStudentsHandler={filterStudentsHandler}
        />
      </Inner>
      {modal}
    </Main>
  );
};

// CSSの定義
const Main = styled.div``;

const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
