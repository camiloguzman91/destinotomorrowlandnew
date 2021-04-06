import '../assets/styles/App.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
        <h1>Este es el Inicio</h1>
      <Footer />
    </div>
  );
}

export default Home;