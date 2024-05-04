import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Home from "./components/home/home"
import Pricing from './components/pricing/pricing';
import About from './components/about/about';
import Blog from './components/blog/blog';
import BlogDetail from './components/blog-detail/blogDetail';
import Contact from './components/contact/contact';
//import Search from './components/search/search';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog-detail' element={<BlogDetail />} />
        <Route path='/contact' element={<Contact />} />
      </Routes >
      
      <Footer />
      
    </>
  );
}

export default App;
