import React from "react";
import {
  Collections,
  Community,
  Explore,
  MarketPlace,
  Register,
  Stats,
} from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/stats" element={<Stats />} />
        <Route path="/" element={<MarketPlace />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/register" element={<Register />} />
        <Route path="/community" element={<Community />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </>
  );
};

export default App;
