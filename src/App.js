import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import Blogs from './components/Blogs/Blogs';
import Blog from './components/Blogs/Blog';
import Index from './components/Country/Index';
function App() {
  return (
  <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/blogs/:title' element={<Blog />}></Route>
        <Route path='/country' element={<Index />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
