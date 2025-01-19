import prev from "../assets/prev.png";
import next from "../assets/next.png";

export default function ModuleFooter() {
  return (
    <footer className="bg-black border-t-4 border-red-600">
      <div className="w-[85%] mx-auto flex justify-between items-center py-6 text-white">
        <div className="flex flex-col items-center gap-2 text-2xl">
          <img src={prev} alt="" />
          <p>Module 1.4</p>
          <p>Smoke School</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-2xl">
          <img src={next} alt="" />
          <p>Module</p>
          <p>Quiz</p>
        </div>
      </div>
    </footer>
  );
}
