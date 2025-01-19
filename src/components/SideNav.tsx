import Logo from "/Logo.png";
import { sidebarData } from "../utils/data";
import SideNavElement from "./SideNavElement";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <aside className="sidenav fixed top-0 left-0 h-screen w-1/5 bg-black text-white p-4 pb-20 overflow-y-auto scroll-smooth">
      <img src={Logo} alt="Logo" />
      <Link to="/" className="flex items-center gap-2 mb-6 text-xl">
        <span className="w-12 h-12 bg-green text-black font-bold flex items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12"
          >
            <path
              fill="black"
              d="M15.75 12.75H9.56l2.97 2.97a.75.75 0 0 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 1 1 1.06 1.06L9.56 11.25h6.19a.75.75 0 0 1 0 1.5z"
            />
          </svg>
        </span>
        Lecture Home
      </Link>
      <ul className="space-y-4">
        {sidebarData.map((item, index: number) => (
          <SideNavElement key={item.id} item={item} index={index} />
        ))}
      </ul>
    </aside>
  );
}
