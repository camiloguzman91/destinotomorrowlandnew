import '../assets/styles/App.css';
import Header from '../components/Header';
import Videos from '../components/Video_g';
import Footer from '../components/Footer';

function Video() {
  return (
    <div className="App">
      <Header />
      <Videos />
      <Footer />
    </div>
  );
}

export default Video;