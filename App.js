import './App.css';
import Home from './components/Home';
import Hello from './components/Hello';
import Color from './components/Color';
import Number from './components/Number';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hello" element={<Hello />}/>
        <Route path="/4" element={<Number/>}/>
        <Route path="/hello/red/blue" element={<Color />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;


