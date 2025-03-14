import "./App.css";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import CreateRecipe from "./pages/CreateRecipe";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/CreateRecipes" element={<CreateRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
