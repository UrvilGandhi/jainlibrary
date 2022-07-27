import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import BookAdd from './components/BookAdd';
import BookHome from './components/BookHome';
import BookList from './components/BookList';
import BookRemove from './components/BookRemove';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/" element={<BookHome />} />
                  <Route path="/BookAdd" element={<BookAdd />} />
                  <Route path="/BookHome" element={<BookHome />} />
                  <Route path="/BookList" element={<BookList />} />
                  <Route path="/BookRemove" element={<BookRemove/>}/>
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
