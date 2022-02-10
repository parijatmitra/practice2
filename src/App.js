
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home' ;
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
   <>
    <Router>
   <Navbar />
   <div className="container my-2 nx-2">
   
    <Routes>
     <Route path="/about" element={<About />} />
     <Route path="/home" element={<Home />} />
     </Routes>
  
   </div>
   </Router>
   
   
   </>
  );
}

export default App;
