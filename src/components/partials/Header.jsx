import React from "react";
import { Link } from "react-router-dom";
const Header = ({ data }) => {
  // console.log(data);
  const title =
    data.name ||
    data.original_name ||
    data.title ||
    data.original_title ||
    "Untitled";

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-[100%] h-[50vh] flex flex-col justify-end items-start p-[5%]  "
    >
      <h1 className="w-[70%] text-5xl font-black text-white ">{title}</h1>
      <p className="w-[70%] mt-3 mb-3 text-white ">
        {data.overview.slice(0, 300)}...{" "}
        <Link
          to={`${data.media_type || title}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>{" "}
      </p>
      <p className=" text-white">
        <i className=" text-yellow-400 ri-megaphone-fill"></i>{" "}
        {data.release_date || "No Info"}
        <i className=" text-yellow-400 ml-5 ri-album-fill"></i>{" "}
        {data.media_type.toUpperCase() || "No Info"}
      </p>
      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="bg-secondary px-3 py-3 text-white rounded-md mt-4 "
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
