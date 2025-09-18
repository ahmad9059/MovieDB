import React from "react";
import { Link } from "react-router-dom";
import noImage from "../../../public/noImage.jpg";

const Cards = ({ data, title }) => {
  return (
    <div className=" flex flex-wrap w-full h-full px-[5%] bg-primary ">
      {data.map((card, index) => (
        <Link
          to={`/${card.media_type || title}/details/${card.id}`}
          className="relative w-[25vh] mr-[5%] mb-[5%]"
          key={index}
        >
          <img
            className="h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover rounded-lg"
            src={
              card.poster_path || card.backdrop_path || card.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    card.poster_path || card.backdrop_path || card.profile_path
                  }`
                : noImage
            }
            alt=""
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold ">
            {card.name ||
              card.original_name ||
              card.title ||
              card.original_title ||
              "Untitled"}
          </h1>
          {card.vote_average && (
            <div className=" absolute right-[-10%] top-[20%] text-xl font-semibold text-white w-[5vh] h-[5vh] rounded-full flex justify-center items-center bg-yellow-500 ">
              {(card.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}{" "}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
