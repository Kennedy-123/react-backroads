import './App.css';
import Nav from './Component/Nav';
import Hero from './Component/Hero';
import About from './Component/About';
import Service from './Component/Service';
import Tours from './Component/Tours';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Service/>
      <Tours/>
      <Footer/>
      <script src="./js/app.js"></script>
    </>
  );
}

export default App;
