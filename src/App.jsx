import './App.css'
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Menu from './components/pages/Menu';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
