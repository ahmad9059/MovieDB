import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";
const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return (
    <div className="absolute top-0 left-0 z-[999] bg-[rgba(0,0,0,0.9)] w-screen h-screen flex items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="hover:text-secondary absolute text-3xl text-white right-[5%] top-[5%] cursor-pointer ri-close-fill"
        to={""}
      ></Link>
      {ytvideo ? (
        <ReactPlayer
          controls
          height={800}
          width={1500}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Trailer;
