import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Collections,
  Community,
  Explore,
  MarketPlace,
  Register,
  Stats,
} from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/community" element={<Community />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
