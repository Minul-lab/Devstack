import Navbar from "./components/Navbar";
import Hero from "./components/Herosection";
import Technologies from "./components/technologies";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer";




function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<p>Loading...</p>}>
        <Technologies />
        <ToastContainer position="bottom-right" autoClose={2000} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
