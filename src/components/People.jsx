import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import Cards from "./partials/Cards";

const People = () => {
  document.title = "MovieDB | People ";
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setPeople((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(trending);

  const refreshHander = () => {
    if (people.length === 0) {
      getPeople();
    } else {
      setPage(1);
      setPeople([]);
      getPeople();
    }
  };

  useEffect(() => {
    refreshHander();
  }, [category]);

  return people.length > 0 ? (
    <div className=" w-screen h-screen">
      <div className=" px-[5%] w-full flex items-center justify-between ">
        <h1 className=" text-2xl font-semibold text-zinc-400 ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-secondary cursor-pointer ri-arrow-left-line"
          ></i>
          People
          <small className="text-sm ml-2 text-zinc-600 ">({category})</small>
        </h1>
        <div className="flex items-center w-[80%] ">
          <Topnav />
          <div className="w-[2%]"></div>
        </div>
      </div>
      <InfiniteScroll
        loader={"Loading..."}
        dataLength={people.length}
        hasMore={hasMore}
        next={getPeople}
      >
        <Cards data={people} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
