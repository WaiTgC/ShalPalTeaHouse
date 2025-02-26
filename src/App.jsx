import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PoppicksPage from "./pages/Popular Picks/Popular Picks";
import Specials from "./pages/Burmese Specials/Specials";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/PoppicksPage" element={<PoppicksPage />} />
        <Route path="/Specials" element={<Specials />} />
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
