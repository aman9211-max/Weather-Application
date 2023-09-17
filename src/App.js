import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import About from './components/About'
import Main from './components/Main';
import Run from './components/Run';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route 
}   
from 'react-router-dom';  

function App() {
  return (
    <div className="App">
      <Navbar></Navbar> 
      <Router>
        <Routes>
        <Route exact path='/Weather-App' element={< Main />}></Route>  
        <Route exact path='/' element={< Main />}></Route>  
        <Route exact path='/contact' element={< Contact />}></Route>
        <Route exact path='/run' element={< Run />}></Route>
        <Route exact path='/about' element={< About />}></Route>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
