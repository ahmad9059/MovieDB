import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadPerson, removePerson } from "../store/actions/personActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
// import HorizontalCards from "./partials/HorizontalCards";

const PersonDetails = () => {
  // const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person);
  const [category, setCategory] = useState("movie");
  useEffect(() => {
    dispatch(asyncLoadPerson(id));
    return () => {
      dispatch(removePerson());
    };
  }, [id]);
  return info ? (
    <div className="px-[10%] text-white bg-primary h-[150vh] w-screen flex-col ">
      {/* Part 1: Navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-secondary cursor-pointer ri-arrow-left-line"
          to={""}
        ></Link>
      </nav>

      <div className="w-full flex ">
        {/* Part 2: Left Poster and Details */}

        <div className="w-[25%]">
          <img
            className="h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover rounded-lg"
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.profile_path
            }`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
          <div className="text-2xl flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalId.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalId.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://x.com/${info.externalId.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>

          {/* Personal Informations */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-5 ">
            Person Info
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Known For</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.known_for_department}
          </h1>
          <h1 className="text-lg mt-3 text-zinc-400 font-semibold">Gender</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>
          <h1 className="text-lg mt-3 text-zinc-400 font-semibold">Birthday</h1>
          <h1 className=" text-zinc-400 ">{info.detail.birthday}</h1>
          <h1 className="text-lg mt-3 text-zinc-400 font-semibold">Deathday</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>
          <h1 className="text-lg mt-3 text-zinc-400 font-semibold">
            Place of Birth
          </h1>
          <h1 className=" text-zinc-400 ">{info.detail.place_of_birth}</h1>
          <h1 className="text-lg mt-3 text-zinc-400 font-semibold">
            Also Know As
          </h1>
          <h1 className=" text-zinc-400 ">{info.detail.also_known_as}</h1>
        </div>
        {/* Part 3: Right Details and Informations  */}
        <div className="w-[75%] ml-[5%] ">
          <h1 className="text-6xl text-zinc-400 font-black my-5 ">
            {info.detail.name}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold">BioGraphy</h1>
          <p className="text-zinc-400 mt-3 ">{info.detail.biography}</p>
          <h1 className="text-lg mt-5 text-zinc-400 font-semibold">
            Known For
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />

          <div className="w-full flex justify-between">
            <h1 className="text-xl text-zinc-400 font-semibold">Acting</h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="list-disc text-zinc-300 w-full p-10 h-[50vh] overflow-x-hidden overflow-y-auto mt-5 shadow-2xl shadow-zinc-800 rounded-xl">
            {info[category + "Credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-white duration-300 cursor-pointer px-3 py-2 rounded-lg hover:bg-[#19191d] "
              >
                <Link to={`/${category}/details/${c.id}`}>
                  <span>
                    {c.name ||
                      c.original_name ||
                      c.title ||
                      c.original_title ||
                      "Untitled"}
                  </span>
                  <span className="block ml-5">
                    {c.character && `Character Name: ${c.character}`}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
