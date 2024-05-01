import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Article } from "./Article";
import { Profile } from "./Profile";
import { NotFound } from "./NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={<Article />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
