import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddTeacher from './components/AddTeacher';
import DeleteTeacher from './components/DeleteTeacher';
import SearchTeacher from './components/SearchTeacher';
import ViewTeacher from './components/ViewTeacher';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddTeacher/>} />
      <Route path="/search" element={<SearchTeacher/>} />
      <Route path="/delete" element={<DeleteTeacher/>} />
      <Route path="/view" element={<ViewTeacher/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
