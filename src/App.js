import './App.css';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <NoteState>
        <div>
          {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navbar />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
          
      </Routes>


        </div>
      </NoteState>
    </BrowserRouter>
  );
}

export default App;
