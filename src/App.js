import Home from './components/Home';
import Places from './components/Places';
import Discover from './components/Discover';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Home />
      <div className="container mx-auto">
        <Places />
        <Discover />
        <Footer />
      </div>
    </>
  );
}

export default App;
