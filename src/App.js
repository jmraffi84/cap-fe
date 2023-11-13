import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import PageNotFound from './Components/Pages/PageNotFound';
import Footer from './Components/Pages/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Navigate to="/" />} /> */}
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<PageNotFound />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
