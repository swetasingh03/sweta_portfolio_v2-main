import './Assets/Styles/styles.css';
import DesignStructure from './Layouts/DesignStructure';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import { useTheme } from './ThemeContext';
function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme === 'light' ? 'bg-white' : 'bg-dark-blue text-white'}`}>
       <DesignStructure>
      <Routes>
       <Route path="/" element={ <Home></Home> } />
       <Route path="/resume" element={ <Resume></Resume> } />
       <Route path="/projects" element={<Project></Project>}></Route>
       <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
       </DesignStructure>
    </div>
  );
}

export default App;
