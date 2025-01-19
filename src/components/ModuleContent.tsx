import BookmarkButton from "./BookmarkButton";
import QuestionMarkTooltip from "./QuestionMarkTooltip";
import image1 from "../assets/25.png";
import image2 from "../assets/26.png";
import image3 from "../assets/27.jpg";
import image4 from "../assets/28.jpg";
import image5 from "../assets/29.jpg";
import image6 from "../assets/30.jpg";
import ModuleFooter from "./ModuleFooter";

export default function ModuleContent() {
  return (
    <section className=" border-l-2 border-white">
      {/* Header */}
      <header className="bg-black  py-6">
        <div className="w-[85%] mx-auto flex justify-between ">
          <h1 className="text-white font-bold text-4xl">
            Module 1.4 <br /> The Importance of <br /> Opacity Observations
          </h1>
          <div>
            <QuestionMarkTooltip />
            <BookmarkButton />
          </div>
        </div>
      </header>
      {/* Content goes here */}
      <div className=" bg-grey border-b-2 border-white">
        <div className="w-[85%] mx-auto flex justify-between items-center py-6">
          <div className="w-1/2">
            <h2 className="text-black font-semibold text-2xl">
              Health impacts of air pollution
            </h2>
            <p className="mt-4 text-base">
              There are many health impacts associated with air pollution.
              Opacity observations are one of the easiest and most effective
              ways to monitor and reduce air pollution. By becoming a visible
              emissions observer, you are helping to reduce the deadliest form
              of pollution in the world.
            </p>
          </div>
          <img src={image1} alt="Image" className="w-1/4" />
        </div>
      </div>

      <div className=" bg-grey ">
        <div className="w-[85%] mx-auto h-full flex justify-between items-center py-6 border-b-4 border-black ">
          <div className="w-1/2 h-full  ">
            <h2 className="text-black font-semibold text-2xl">
              Health fact #1
            </h2>
            <p className="mt-4 text-base">
              92% of the world’s population lives in places where air pollution
              exceeds safe limits.
            </p>
          </div>
          <img src={image2} alt="Image" className="w-1/3" />
        </div>
      </div>

      <div className=" bg-grey ">
        <div className="w-[85%] mx-auto h-full flex justify-between items-center py-6 border-b-4 border-black">
          <img src={image3} alt="Image" className="w-1/3" />

          <div className="w-1/2 h-full  ">
            <h2 className="text-black font-semibold text-2xl">
              Health fact #2
            </h2>
            <p className="mt-4 text-base">
              Air pollution is the fourth-largest threat to human health after
              high blood pressure, dietary risks and smoking.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-grey ">
        <div className="w-[85%] mx-auto h-full flex justify-between items-center py-6 border-b-4 border-black">
          <div className="w-1/2 h-full  ">
            <h2 className="text-black font-semibold text-2xl">
              Health fact #3
            </h2>
            <p className="mt-4 text-base">
              In 2017, approximately 10% of all deaths worldwide were from air
              pollution related diseases.
            </p>
          </div>

          <img src={image4} alt="Image" className="w-1/3" />
        </div>
      </div>

      <div className=" bg-grey ">
        <div className="w-[85%] mx-auto h-full flex justify-between items-center py-6 border-b-4 border-black">
          <img src={image5} alt="Image" className="w-1/3" />
          <div className="w-1/2 h-full  ">
            <h2 className="text-black font-semibold text-2xl">
              Health fact #4
            </h2>
            <p className="mt-4 text-base">
              In 2017, it is estimated that air pollution reduced worldwide life
              expectancy by an average of 20 months.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-grey ">
        <div className="w-[85%] mx-auto h-full flex justify-between items-center py-6">
          <div className="w-1/2 h-full  ">
            <h2 className="text-black font-semibold text-2xl">
              Health fact #5
            </h2>
            <p className="mt-4 text-base">
              Countries with the highest air pollution levels might surprise
              you.
            </p>
          </div>

          <img src={image6} alt="Image" className="w-1/3" />
        </div>
      </div>
      <ModuleFooter />
    </section>
  );
}
