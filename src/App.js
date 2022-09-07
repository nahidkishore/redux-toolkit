import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Books from './Components/Books';
import Create from './Components/Create';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/create'>Create Book</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Books />} />
        <Route path='/books' element={<Books />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
