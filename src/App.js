import './App.css';
import Navbar from './components/Common/Navbar'
import Discover from './components/Home/Discover';
import Elearning from './components/Home/Elearning';
import Footer from './components/Home/Footer';
import HeroSection from './components/Home/HeroSection';
import Join from './components/Home/Join';
import Meet from './components/Home/Meet';
import Question from './components/Home/Question';
import Socials from './components/Home/Socials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Discover />
      <Elearning />
      <Join />
      <Meet />
      <Question />
      <Footer />
    </div>
  );
}

export default App;