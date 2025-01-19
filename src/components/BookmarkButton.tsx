import { useState } from "react";

export default function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Toggle bookmark state
  const toggleBookmark = () => {
    setIsBookmarked((prevState) => !prevState);
  };

  return (
    <div className="flex items-center gap-2 mt-6">
      <button
        onClick={toggleBookmark}
        className={`relative w-8 h-8 flex items-center justify-center rounded-md transition-all `}
        aria-label={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12"
        >
          <path
            d="M6 2a2 2 0 0 0-2 2v18l8-4 8 4V4a2 2 0 0 0-2-2H6z"
            className={!isBookmarked ? "fill-white" : "fill-teal-500"}
          />
        </svg>

      </button>
      <span className="text-white text-lg">Bookmark</span>
    </div>
  );
}
