
import './App.css';
import Logo from "./components/template/Logo";
import Menu from "./components/template/Menu";
import Footer from "./components/template/Footer";
import Home from './components/home/Home';

function App() {
  return (
  <>
    <div className="app">
      <Logo />
      <Menu />
      <Home />
      <Footer />
    </div>
  </>
  );
}

export default App;