import SideNav from "../components/SideNav";
import ModuleContent from "../components/ModuleContent";
import { useState } from "react";

export default function ModulePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="flex min-h-screen lg:pl-[20%] ">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-4 right-4 h-6 w-6"
        aria-label="Open menu"
      >
        <span className="bg-white block h-0.5 w-full rounded-xl"></span>
        <span className="bg-white block h-0.5 w-5/6 mx-auto rounded-xl my-1"></span>
        <span className="bg-white block h-0.5 w-full rounded-xl"></span>
      </button>
      <SideNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <ModuleContent />
    </main>
  );
}
