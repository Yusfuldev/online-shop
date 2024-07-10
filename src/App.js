import Header from "./components/Header";
import Container from "./components/Container";
import Categories from "./components/Categories";
import Features from "./components/Features";
import Launched from "./components/Launched";
import Wears from "./components/Wears";
import Women from './components/Women';
import Brands from './components/Brands';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <Categories />
      <Features />
      <Launched />
      <Wears />
      <Women />
      <Brands/>
      <Footer />
    </div>
  );
}

export default App;
