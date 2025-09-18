import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadTv, removeTv } from "../store/actions/tvActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";
const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.tv);
  useEffect(() => {
    dispatch(asyncLoadTv(id));
    return () => {
      dispatch(removeTv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.8)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen relative h-[175vh] px-[10%] "
    >
      {/* Part 1: Navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-secondary cursor-pointer ri-arrow-left-line"
          to={""}
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalId.imdb_id}/`}
        >
          imdb
        </a>
      </nav>

      {/* Part 2: Poster and Detail      */}
      <div className="w-full flex  ">
        <img
          className="h-[50vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover rounded-lg"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] text-white ">
          <h1 className="text-5xl font-black ">
            {" "}
            {info.detail.name ||
              info.detail.original_name ||
              info.detail.title ||
              info.detail.original_title ||
              "Untitled"}
            <small className="text-2xl text-bold text-zinc-300 ">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex mt-3 mb-5  items-center gap-x-5 gap-y-10 ">
            <span className="text-xl font-semibold text-white w-[5vh] h-[5vh] rounded-full flex justify-center items-center bg-yellow-500 ">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="w-[60px] leading-6 font-med text-2xl">User Score</h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(", ")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-2xl italic text-zinc-200">
            {info.detail.tagline}
          </h1>
          <h1 className="text-xl mb-3 font-semibold mt-5 ">Overview</h1>
          <p>{info.detail.overview}</p>

          <h1 className="text-xl mb-3 font-semibold mt-5 ">Show Translated:</h1>
          <p className="mb-10">{info.translations.join(", ")}</p>

          <Link
            className="px-6 py-4 bg-secondary rounded-lg"
            to={`${pathname}/trailer`}
          >
            <i className=" text-xl ri-play-fill mr-3"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* Part 3: Available Platforms */}
      <div className="w-[80%] flex flex-col gap-y-5 mt-10 ">
        {info.watchProviders.EG && info.watchProviders.EG.flatrate && (
          <div className="flex items-center text-white gap-x-10 ">
            <h1>Available on Platform</h1>
            {info.watchProviders.EG.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchProviders.EG && info.watchProviders.EG.rent && (
          <div className="flex items-center text-white gap-x-10 ">
            <h1>Available on Rent</h1>
            {info.watchProviders.EG.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchProviders.EG && info.watchProviders.EG.buy && (
          <div className="flex items-center text-white gap-x-10 ">
            <h1>Available on Buy</h1>
            {info.watchProviders.EG.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* Part-4: Seasons */}
      <h1 className="text-3xl mt-10 font-bold text-white">Seasons</h1>
      <div className="flex gap-5 overflow-x-auto mb-5 p-5 scrollbar-thin scrollbar-thumb-zinc-700">
        {info.detail.seasons.map((s, i) => (
          <div className=" min-w-[15%] mr-[1%] ">
            <img
              className="h-[30vh]  shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover rounded-lg"
              src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
              alt=""
            />
            <h1 className="text-2xl text-center  text-zinc-300 mt-3 font-semibold ">
              {s.name}
            </h1>
          </div>
        ))}
      </div>

      {/* Part-5: Recommendations and Similar */}
      <h1 className="text-3xl mt-10 font-bold text-white">Recommendations</h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
