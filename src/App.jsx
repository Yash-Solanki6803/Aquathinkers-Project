import { useStore } from "./store";
import { data } from "./data/homepage";
function App() {
  const synthesisType = useStore((state) => state.synthesisType);
  const toggleSynthesis = useStore((state) => state.toggleSynthesis);
  return (
    <>
      <h1 className="text-3xl">
        Home :{" "}
        {synthesisType
          ? data.chemosynthesis.description
          : data.photosynthesis.description}
      </h1>
      <button onClick={toggleSynthesis}>Toggle</button>
    </>
  );
}

export default App;
