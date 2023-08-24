// import logo from './logo.svg';
import './App.css';
import About from './component/about';
import Home from './component/home';
import { Route,Routes } from 'react-router';
import Navbar from './component/navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about/" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
