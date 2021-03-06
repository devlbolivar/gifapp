import React from "react";
import { useFetchGif } from "../hooks/useFetchGif";

export const MainGif = () => {
  useFetchGif();
  const { data: img, loading } = useFetchGif();
  return (
    <div className="main__gif">
      <img alt="Random Img logo" src={img.url} />
    </div>
  );
};
