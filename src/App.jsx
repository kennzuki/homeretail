import { Routes,Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Properties from "./pages/Properties.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;
