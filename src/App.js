import "./App.css";
import AboutUs from "./components/About us/AboutUs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;
