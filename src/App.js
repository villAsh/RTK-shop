// import logo from './logo.svg';

import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import store from './App/store';

import { Provider } from 'react-redux';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
