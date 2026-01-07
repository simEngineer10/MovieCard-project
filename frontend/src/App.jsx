import "./CSS/App.css";
import NavBar from "./components/NavBar";
import Favourites from "./Pages/Favourites";
import Home from "./Pages/Home";
import { MovieProvider } from "./contexts/MovieContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
