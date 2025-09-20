import React from "react";
import { SquareX } from "lucide-react";
import FileList from "./FileList";
type Props = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: Props) {
  return (
    <>
      {/* sliding panel */}
      <aside
        aria-hidden={!open}
        className={
          "fixed inset-y-0 left-0 z-40 w-80 transform bg-base-200 p-4 shadow-lg transition-transform duration-300 ease-in-out " +
          (open ? "translate-x-0" : "-translate-x-full")
        }
      >
        <button className="btn btn-sm mb-4" onClick={onClose}>
          <SquareX />
        </button>
        <FileList />
      </aside>

      {/* fading overlay */}
      <div
        onClick={onClose}
        className={
          "fixed inset-0 z-30 bg-black transition-opacity duration-300 " +
          (open
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none")
        }
        aria-hidden={!open}
      />
    </>
  );
}
