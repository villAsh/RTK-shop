// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
