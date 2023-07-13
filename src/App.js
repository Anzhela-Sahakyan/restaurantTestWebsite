import "./App.css";
import AboutUs from "./components/About us/AboutUs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SpecialMenu from "./components/Special menu/SpecialMenu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
    </div>
  );
}

export default App;
