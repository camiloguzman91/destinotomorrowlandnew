import '../assets/styles/App.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MainText from '../components/MainText';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainText />
      <Footer />
    </div>
  );
}

export default Home;