import React, { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import GlobalStyle from "./globalStyle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      terms: [85, 86, 87, 88, 89, 90],
      rooms: [
        { id: 0, name: "全体" },
        { id: 1, name: "渋谷" },
        { id: 2, name: "東京" },
        { id: 3, name: "新宿" },
        { id: 4, name: "池袋" },
        { id: 5, name: "名古屋" },
        { id: 6, name: "梅田" }
      ],
      lessons: [
        { id: 0, name: "Lesson1" },
        { id: 1, name: "Lesson2" },
        { id: 2, name: "Lesson3" },
        { id: 3, name: "Lesson4" }
      ],
      mentors: [
        { id: 0, name: "ドンキーコング" },
        { id: 1, name: "ディディーコング" },
        { id: 2, name: "ランキーコング" },
        { id: 3, name: "タイニーコング" },
        { id: 4, name: "チャンキーコング" }
      ],
      // 受講生情報
      name: "",
      term: 85,
      room: 1,
      lesson: 0,
      mentor: 0,
      url: "",
      nextId: 0,
      currentRoom: 0,
      currentStudentId: 0,
      isModalOpen: false,
      isEditModeOn: false
    };
  }
  render() {
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
      isModalOpen
    } = this.state;
    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Main
          students={students}
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
          currentRoom={currentRoom}
          isModalOpen={isModalOpen}
          editStudent={this.editStudent}
          deleteStudent={this.deleteStudent}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          toggleModalHandler={this.toggleModalHandler}
          changeTabHandler={this.changeTabHandler}
          filterStudentsHandler={this.filterStudentsHandler}
        />
      </div>
    );
  }

  // inputの値を変更したら、そのinputに指定されているname属性をキーにして、値をstateに保存する。
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // 受講生を新規で追加
  addStudent = (name, term, room_id, lesson_id, mentor_id, url) => {
    const { students, rooms, lessons, mentors, nextId } = this.state;
    this.setState({
      students: [
        ...students,
        {
          id: nextId,
          name: name,
          term: term,
          room: rooms[room_id].id,
          lesson: lessons[lesson_id].name,
          mentor: mentors[mentor_id].name,
          url: url
        }
      ]
    });
  };

  // 「編集」ボタンをクリックしたときに、対象の受講生のデータをモーダルに初期値として表示
  editStudent = studentId => {
    const { students, lessons, mentors } = this.state;
    const studentIndex = students.findIndex(student => {
      return student.id === studentId;
    });

    const student = { ...students[studentIndex] };

    const lessonIndex = lessons.findIndex(lesson => {
      return lesson.name === student.lesson;
    });
    const mentorIndex = mentors.findIndex(mentor => {
      return mentor.name === student.mentor;
    });

    this.setState({
      name: student.name,
      term: student.term,
      room: student.room,
      lesson: lessonIndex,
      mentor: mentorIndex,
      url: student.url,
      currentStudentId: student.id,
      isEditModeOn: true
    });
    this.toggleModalHandler();
  };

  updateStudent = studentId => {
    const {
      lessons,
      mentors,
      name,
      term,
      room,
      lesson,
      mentor,
      url
    } = this.state;

    const studentIndex = this.state.students.findIndex(student => {
      return student.id === studentId;
    });

    const students = [...this.state.students];
    students[studentIndex] = {
      id: studentId,
      name: name,
      term: term,
      room: room,
      lesson: lessons[lesson].name,
      mentor: mentors[mentor].name,
      url: url
    };
    this.setState({ students: students });
  };

  // 「削除」ボタンを押したときに、対象の受講生を削除する
  deleteStudent = id => {
    const { students } = this.state;
    this.setState({
      students: students.filter(student => {
        return student.id !== id;
      })
    });
  };

  // 「登録」ボタンを押したときに発火。
  // 「新規追加」ボタンを押してモーダルを開いた場合は、入力した内容の受講生が追加される。
  // 「編集」ボタンを押してモーダルを開いた場合は、対象の受講生のデータを入力した内容で上書きする。
  handleSubmit = event => {
    const {
      name,
      term,
      room,
      lesson,
      mentor,
      url,
      nextId,
      currentStudentId,
      isEditModeOn
    } = this.state;
    event.preventDefault();

    if (isEditModeOn) {
      this.updateStudent(currentStudentId);
    } else {
      this.addStudent(name, term, room, lesson, mentor, url);
      this.setState({ nextId: nextId + 1 });
    }
    this.setState({
      name: "",
      term: 85,
      room: 1,
      lesson: 0,
      mentor: 0,
      url: "",
      isEditModeOn: false
    });
    this.toggleModalHandler();
  };

  // モーダルの表示/非表示を切り替える。モーダルを閉じるときには、stateの値を初期化する
  toggleModalHandler = () => {
    const { isModalOpen } = this.state;
    if (isModalOpen) {
      this.setState({
        name: "",
        term: 85,
        room: 1,
        lesson: 0,
        mentor: 0,
        url: "",
        isEditModeOn: false
      });
    }
    this.setState({ isModalOpen: !isModalOpen });
  };

  // クリックしたタブをアクティブにする。
  changeTabHandler = event => {
    this.setState({
      currentRoom: parseInt(event.target.getAttribute("data-room-id"))
    });
  };

  // アクティブになっている教室に属する受講生に絞り込みを行う。「全体」がアクティブの場合は全受講生を表示する。
  filterStudentsHandler = students => {
    const { currentRoom } = this.state;
    const filterdStudents = students.filter(student => {
      return student.room === currentRoom || currentRoom === 0;
    });
    return filterdStudents;
  };
}

export default App;
