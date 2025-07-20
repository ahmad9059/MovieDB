import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, Links } from "react-router-dom";
import noImage from "../../../public/noImage.jpg";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] relative mx-auto flex items-center ">
      <i className=" text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[48%] mx-10 px-3 py-2 text-xl text-zinc-200 outline-none border-none "
        type="text"
        placeholder="Search"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="right-0 text-3xl text-zinc-400 ri-close-fill cursor-pointer "
        ></i>
      )}

      <div className="z-[100] w-[50%] max-h-[50vh] overflow-auto rounded-md bg-zinc-200 absolute left-[5%]  top-[100%] ">
        {searches?.map((search, index) => {
          const imagePath = search.backdrop_path || search.profile_path;
          const imageURL = imagePath
            ? `https://image.tmdb.org/t/p/original/${imagePath}`
            : noImage;

          const title =
            search.name ||
            search.original_name ||
            search.title ||
            search.original_title ||
            "Untitled";

          return (
            <Link
              to={`/${search.media_type}/details/${search.id}`}
              key={index}
              className="w-full p-10 flex justify-start items-center font-semibold border-b border-zinc-100 hover:bg-zinc-300 hover:text-black text-zinc-600"
            >
              <img
                className="w-[10vh] h-[10vh] object-cover rounded-md mr-5 shadow-lg"
                src={imageURL}
                alt={title}
              />
              <span>{title}</span>
            </Link>
          );
        })}

        {/* <Link className=" hover:text-black hover:bg-zinc-300 w-full p-10 flex justify-start items-center font-semibold border-b-1 text-zinc-600 border-zinc-100">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;
