// ...existing code...
import { useState } from "react";
import ThemeChanger from "./ThemeChanger";
import Sidebar from "./Sidebar";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setOpen(true)}
            aria-label="open sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="ps-4">
          <a className="text-lg font-bold">Marmalade</a>
        </div>
        <div className="flex grow justify-end px-2">
          <div className="flex items-center gap-5">
            <a className=" font-sm">Upload File</a>
            <a className=" font-sm">Export File</a>
            <ThemeChanger />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
