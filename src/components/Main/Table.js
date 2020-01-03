import React from "react";
import styled from "styled-components";

export default props => {
  const { students, editStudent, deleteStudent, filterStudentsHandler } = props;
  const filterdStudents = filterStudentsHandler(students);
  const studentsList = filterdStudents.map((student, index) => {
    return (
      <TableRow key={index} className="table__TableRow">
        <TableDescription>{student.id}</TableDescription>
        <TableDescription>{student.name}</TableDescription>
        <TableDescription>{student.term}</TableDescription>
        <TableDescription>{student.lesson}</TableDescription>
        <TableDescription>{student.mentor}</TableDescription>
        <TableDescription>
          <Url href={student.url} target="_blank">
            <Icon />
          </Url>
        </TableDescription>
        <TableDescription>
          <EditBtn
            onClick={() => {
              editStudent(student.id);
            }}
          >
            編集
          </EditBtn>
          <DeleteBtn
            onClick={() => {
              deleteStudent(student.id);
            }}
          >
            削除
          </DeleteBtn>
        </TableDescription>
      </TableRow>
    );
  });

  return (
    <Wrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeading width="10%">受講生ID</TableHeading>
            <TableHeading width="15%">名前</TableHeading>
            <TableHeading width="10%">
              <TableSelect>
                <TableOption value="">期数</TableOption>
              </TableSelect>
            </TableHeading>
            <TableHeading width="20%">受講中のレッスン</TableHeading>
            <TableHeading width="20%">
              <TableSelect>
                <TableOption value="">担当メンター</TableOption>
              </TableSelect>
            </TableHeading>
            <TableHeading width="10%">TM URL</TableHeading>
            <TableHeading width="15%">編集 ・ 削除</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>{studentsList}</TableBody>
      </Table>
    </Wrapper>
  );
};

// CSSの定義
const Wrapper = styled.div`
  max-height: 70vh;
  overflow: scroll;
`;

const Table = styled.table`
  background: #ffffff;
  width: 100%;
`;
const TableHead = styled.thead``;

const TableRow = styled.tr`
  border-bottom: 1px solid #f0f3f4;
`;

const TableHeading = styled.th`
  padding: 5px;
  border-right: 1px solid #f0f3f4;
`;

const TableDescription = styled.td`
  padding: 5px;
  border-right: 1px solid #f0f3f4;
  text-align: center;
`;

const TableBody = styled.tbody``;

const Url = styled.a`
  font-size: 1.2rem;
  color: #1c7cd5;
`;

const TableSelect = styled.select`
  border: none;
  background: none;
  font-weight: bold;
`;

const TableOption = styled.option``;

const Icon = styled.i.attrs({
  className: "fas fa-external-link-alt"
})`
  color: #1c7cd5;
`;

const EditBtn = styled.button`
  background: #1c7cd5;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1.2rem;
  border: none;
  margin: 0 5%;
`;

const DeleteBtn = styled.button`
  background: #ff336a;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1.2rem;
  border: none;
  margin: 0 5%;
`;
