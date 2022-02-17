import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PagePrincipale from "./Components/PagePrincipale"
import Inscription from "./Components/Inscription"
import Connexion from "./Components/Connexion"
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PagePrincipale />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/profile/:nom" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
