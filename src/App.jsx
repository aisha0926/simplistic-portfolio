import {
  About,
  Banner,
  Contact,
  Navbar,
  Projects,
  Technologies,
} from './components';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
