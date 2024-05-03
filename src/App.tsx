import './App.css'
import ListCourse from './components/B1/ListCourse.tsx';
import Calculation from './components/B2/Calculation.tsx';
import UserInfo from './components/B3/UserInfo.tsx';
import ColorBox from './components/B4/ColorBox.tsx';
import ColorBox2 from './components/B5/ColorBox2.tsx';
import FormatName from './components/B6/FormatName.tsx'
import AdminIndex from './components/B7/AdminIndex.tsx'
import UserLayout from './components/B8/UserLayout.tsx'
import ListUser from './components/B9/ListUser.tsx'
import TodoListIndex from './components/B10/TodoListIndex.tsx'

function App() {

  return (
    // Bài 1
    <>
      <h2>Danh sách khóa học</h2>
      <ListCourse></ListCourse>

      <h2>Danh sách kết quả</h2>
      <Calculation></Calculation>

      <h2>Thông tin cá nhân</h2>
      <UserInfo></UserInfo>

      <ColorBox></ColorBox>

      <ColorBox2></ColorBox2>

      <FormatName></FormatName>

      <AdminIndex></AdminIndex>
      <br />

      <UserLayout></UserLayout>
      <br />

      <ListUser></ListUser>
      <br />

      <TodoListIndex></TodoListIndex>
    </>

  )
}

export default App
