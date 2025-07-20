import React from "react";
import { Link } from "react-router-dom";
import noImage from "../../../public/noImage.jpg";
import Dropdown from "./Dropdown";
const HorizontalCards = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="flex gap-5 overflow-x-auto mb-5 p-5 scrollbar-thin scrollbar-thumb-zinc-700">
        {data.map((d, index) => {
          const imagePath = d.backdrop_path || d.poster_path;
          const imageURL = imagePath
            ? `https://image.tmdb.org/t/p/original/${imagePath}`
            : noImage;

          const title =
            d.name ||
            d.original_name ||
            d.title ||
            d.original_title ||
            "Untitled";

          return (
            <Link
              to={`${d.media_type}/details/${d.id}`}
              key={index}
              className="min-w-[200px] max-w-[220px] flex-shrink-0 bg-zinc-900 rounded shadow-md"
            >
              <img
                className="w-full h-[160px] object-cover rounded-t"
                src={imageURL}
                alt={title}
              />

              <div className="p-4 text-white">
                <h2 className="text-lg font-semibold truncate">{title}</h2>
                <p className="text-sm text-zinc-300">
                  {d.overview
                    ? `${d.overview.slice(0, 50)}...`
                    : "No description."}{" "}
                  <span className="text-zinc-500 italic">more</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default HorizontalCards;
