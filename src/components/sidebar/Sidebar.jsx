import { useState } from "react";
import Tree from "../Tree";

function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className={
          "fixed bg-white px-10 py-4 rounded-xl top-20 left-4 cursor-pointer " +
          (open ? "hidden" : "")
        }
      >
        Check Evolution Tree
      </div>
      <div
        className={
          "h-screen w-[40vw] fixed z-10 bg-slate-400 py-40 px-10 flex flex-col items-center justify-around transition-all duration-100 " +
          (open ? "left-0" : "-left-full")
        }
      >
        <h1 onClick={() => setOpen(false)} className="text-4xl cursor-pointer">
          Close
        </h1>
        <Tree setOpen={setOpen} />
      </div>
    </>
  );
}

export default Sidebar;
