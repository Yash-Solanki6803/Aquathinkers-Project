import { useStore } from "../store";
// import { data } from "../data/homepage";
import { useEffect } from "react";

function Home() {
  const synthesisType = useStore((state) => state.synthesisType);
  const toggleSynthesis = useStore((state) => state.toggleSynthesis);

  useEffect(() => {
    // Add or remove the 'dark' class from the body based on the synthesisType
    if (synthesisType) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [synthesisType]);
  return (
    <>
      <div
        className="bg-slate-700"
        style={{
          background:
            "url('https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center fixed",
          backgroundSize: "cover",
        }}
      >
        <h1 className="p-44 dark:text-red-600">
          {synthesisType ? "Chemosynthesis" : "Photosynthesis"}
        </h1>
        <button onClick={toggleSynthesis}>Toggle VIeww</button>
      </div>
    </>
  );
}

export default Home;
