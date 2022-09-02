import "./App.css";
import AllGalleries from "./components/AllGalleries";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Top from "./components/Top";

function App() {
  return (
    <div>
      <NavBar />
      <Top />
      <AllGalleries />
      <Footer />
    </div>
  );
}

export default App;
