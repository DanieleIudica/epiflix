import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllGalleries from "./components/AllGalleries";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Top from "./components/Top";
import { TwShows } from "./components/TwShows";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Top />
        <Routes>
          <Route path="/" element={<AllGalleries />} />
          <Route path="/twshows" element={<TwShows />} />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
