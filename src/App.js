import "./App.css";
import AboutUs from "./components/About us/AboutUs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SpecialMenu from "./components/Special menu/SpecialMenu";
import Chef from "./components/Chef/Chef";
import Intro from "./components/Intro/Intro";
import Laurels from "./components/Laurels/Laurels";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
    </div>
  );
}

export default App;
