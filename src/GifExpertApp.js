import React, { useState } from "react";

import { GifGrid } from "./components/GifGrid";
import { SearchBar } from "./components/SearchBar";
import { DarkModeBtn } from "./components/DarkModeBtn";
import { MainGif } from "./components/MainGif";
export const GifExpertApp = ({ defaultCategories = ["funny"] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div className="main__container">
      <div className="header">
        <h2 className="main__title left">GifExpertApp</h2>
        <MainGif />
        <div className="right"></div>
      </div>
      <div className="first__bar">
        <SearchBar setCategories={setCategories} />
        <DarkModeBtn />
      </div>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
