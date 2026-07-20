import "./App.css";

import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import FaqPage from "./components/FaqPage";
import QuestionsPage from "./components/QuestionsPage";

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <nav className="navbar">
          <Link className="logo" to="/">
            Gita FrontEnd
          </Link>

          <ul className="nav-list">
            <li>
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>dipsa
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/faq/:id" element={<QuestionsPage />}/>
        </Routes>
      </main>

      <footer className="site-footer">
        <p>React Router ლექცია 21 - მარტივი მრავალგვერდიანი ვებგვერდი</p>
      </footer>
    </div>
  );
}

export default App;
