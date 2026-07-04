import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import InteractiveBackground from "./components/InteractiveBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppRoutes } from "./routes";

function App() {
  const location = useLocation();

  return (
    <>
      <InteractiveBackground />
      <Header />
      <main className="min-h-screen relative z-10">
        <AnimatePresence mode="wait">
          <AppRoutes key={location.pathname} location={location} />
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
