import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PoppicksPage from "./pages/Popular Picks/Popular Picks";
import Specials from "./pages/Burmese Specials/Specials";
import Salads from "./pages/Burmese Salads/Salads";
import Snacks from "./pages/Burmese Snacks/Snacks";
import Drinks from "./pages/Drinks/Drinks";
import Today from "./pages/Today/Today";
import Combo from "./pages/Combo/Combo";
import AddCart from "./pages/AddCart/AddCart";
import CheckOut from "./pages/CheckOut/CheckOut";
import StoreContextProvider from "./context/StoreContextProvider";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <StoreContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PoppicksPage" element={<PoppicksPage />} />
          <Route path="/Specials" element={<Specials />} />
          <Route path="/Salads" element={<Salads />} />
          <Route path="/Snacks" element={<Snacks />} />
          <Route path="/Drinks" element={<Drinks />} />
          <Route path="/Today" element={<Today />} />
          <Route path="/Combo" element={<Combo />} />
          <Route path="/AddCart" element={<AddCart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
        </Routes>
      </StoreContextProvider>
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
