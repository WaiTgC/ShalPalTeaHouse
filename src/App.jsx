import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PoppicksPage from "./pages/Popular Picks/Popular Picks";
import Specials from "./pages/Burmese Specials/Specials";
import Salads from "./pages/Burmese Salads/Salads";
import Snacks from "./pages/Burmese Snacks/Snacks";
import Drinks from "./pages/Drinks/Drinks";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PoppicksPage" element={<PoppicksPage />} />
        <Route path="/Specials" element={<Specials />} />
        <Route path="/Salads" element={<Salads />} />
        <Route path="/Snacks" element={<Snacks />} />
        <Route path="/Drinks" element={<Drinks />} />
      </Routes>

      {/* <Header />
      <Logobar />
      <Navbar />
      <Routes>
        <Route>

        </Route>
      </Routes> */}
    </div>
  );
};

export default App;
