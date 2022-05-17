import './App.css';
import Home from './components/home';
import Shop from './components/shop';
import About from './components/about';
import Nav from './components/nav';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Router>
        <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
