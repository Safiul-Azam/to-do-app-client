import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Login from './component/LoginAuth/Login';
import RequireAuth from './component/LoginAuth/RequireAuth';
import SignUp from './component/LoginAuth/SignUp';
import ToDo from './component/ToDo/ToDo';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={
        <RequireAuth>
          <ToDo></ToDo>
          </RequireAuth>
        }></Route>
        <Route path='/todo' element={
        <RequireAuth>
          <ToDo></ToDo>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
