import { Link } from "react-router-dom";

import FadeInEffect from "../../../../components/FadeInEffect";

const suggestions = [
  {
    title: "FOR WORK",
    image:
      "https://res.cloudinary.com/draqaiefe/image/upload/v1744113103/forWork_tqi2ku.jpg",
  },
  {
    title: "FOR OUTDOOR SPORTS",
    image:
      "https://res.cloudinary.com/draqaiefe/image/upload/v1744113102/forSport_wpldzc.jpg",
  },
  {
    title: "FOR THE WEEKEND",
    image:
      "https://res.cloudinary.com/draqaiefe/image/upload/v1744113103/forTheWeekend_btwqlq.jpg",
  },
  {
    title: "FOR A DATE",
    image:
      "https://res.cloudinary.com/draqaiefe/image/upload/v1744113101/forDate_qximxc.jpg",
  },
  {
    title: "FOR A HOLIDAY",
    image:
      "https://res.cloudinary.com/draqaiefe/image/upload/v1744113101/forHoliday_l43b5o.jpg",
  },
  {
    title: "FOR A PARTY",
    image:
      "https://res.cloudinary.com/draqaiefe/image/upload/v1744113102/forParty_iorb7r.webp",
  },
];

function Suggestion() {
  return (
    <FadeInEffect>
      <div className="my-24 px-0">
        <h1 className="text-2xl font-extrabold uppercase text-center 2xl:text-left">
          Suggestion for you
        </h1>
        <div className="my-6 flex justify-center gap-[14px] flex-wrap">
          {suggestions.map((suggestion, index) => (
            <Link key={index} className="">
              {/* Suggestion img */}
              <div className="relative overflow-hidden group">
                <img
                  src={suggestion.image}
                  alt={suggestion.title}
                  className="w-[382px] h-[450px] md:w-[360px] xl:w-[350px] xl:h-[450px] 2xl:w-[230px] 2xl:h-[300px] object-cover"
                />
                {/* Suggestion title */}
                <div className="absolute bottom-5 left-5 text-lg text-white font-bold group-hover:text-slate-300">
                  {suggestion.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </FadeInEffect>
  );
}

export default Suggestion;
