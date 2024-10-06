import { useEffect } from "react";
import { useStore } from "../../store";

function ToggleType() {
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
    <div className="fixed bg-white px-6 py-4 rounded-full right-10 top-20 dark:text-white dark:bg-slate-900">
      <button onClick={toggleSynthesis}>
        {synthesisType ? "Switch->Photosynthesis" : "Switch->Chemosynthesis"}
      </button>
    </div>
  );
}

export default ToggleType;
