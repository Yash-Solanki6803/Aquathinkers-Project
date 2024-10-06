import { useStore } from "../store";
import { data } from "../data/homepage";

function Home() {
  const synthesisType = useStore((state) => state.synthesisType);
  const toggleSynthesis = useStore((state) => state.toggleSynthesis);
  return (
    <>
      
      <br />
      <p>{synthesisType?"Chemo":"Photo"}</p>
      <button onClick={toggleSynthesis}>Toggle Synthesis</button>
    </>
  );
}

export default Home;
