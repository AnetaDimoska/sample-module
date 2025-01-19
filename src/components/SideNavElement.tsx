import { Link } from "react-router-dom";
import { SideNavElementType } from "../types/sidenav-element-type";
import { useState } from "react";

type Props = {
  item: SideNavElementType;
  index: number;
};

export default function SideNavElement({ item, index }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle function to handle expanding and collapsing
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <li key={item.id} className="mb-2 border-t py-2  border-white" >
      <div
        className="flex items-center gap-3"
        onClick={() => handleToggle(index)}
        
      >
        <span className="w-6 h-6 bg-teal-500 text-black font-bold flex items-center justify-center rounded-full">
          {item.id}
        </span>
        <Link to="#" className="text-xl font-medium hover:underline">
          {item.title}
        </Link>
      </div>

      {/* Render sub-items */}
      {activeIndex === index && (
        <ul className="ml-10 mt-2 space-y-1 text-sm text-gray-400 transition-all duration-300">
          {item.lectures.map((subItem, subIndex) => (
            <li key={subIndex}>
              <Link to="#" className="hover:text-white block py-1">
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
