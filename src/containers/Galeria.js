import '../assets/styles/App.css';
import Header from '../components/Header';
import Galery from '../components/Galery';
import Footer from '../components/Footer';

function Galeria() {
  return (
    <div className="App">
      <Header />
      <Galery />
      <Footer />
    </div>
  );
}

export default Galeria;