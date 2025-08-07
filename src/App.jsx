import { useState} from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './styles/global.css';

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
        {page === "home" && <Home />}
        {page === "projects" && <Projects />}
      <Footer />
    </div>
  );
}

export default App;
