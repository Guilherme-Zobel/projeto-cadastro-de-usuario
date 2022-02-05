
import './App.css';
import Logo from "./components/template/Logo";
import Menu from "./components/template/Menu";
import Main from "./components/template/Main";
import Footer from "./components/template/Footer";

function App() {
  return (
  <>
    <div className="app">
      <Logo />
      <Menu />
      <Main icon="home" title="Início"
          subtitle="Segundo projeto do capítulo de React."/>
      <Footer />
    </div>
  </>
  );
}

export default App;