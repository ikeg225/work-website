import './css/style.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
