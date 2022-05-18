import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import ToDo from './component/ToDo/ToDo';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
      </Routes>
    </div>
  );
}

export default App;
