import CustomCursor from './components/CustomCursor';
import InteractiveBackground from './components/InteractiveBackground';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <InteractiveBackground />
      <CustomCursor />
      <main className="min-h-screen relative z-10">
        <Hero />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

