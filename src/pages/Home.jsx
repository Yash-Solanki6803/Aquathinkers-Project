import { useStore } from "../store";

function Home() {
  const synthesisType = useStore((state) => state.synthesisType);
  const toggleSynthesis = useStore((state) => state.toggleSynthesis);
  return (
    <>
      <div className="bg-slate-700">
        <h1 className="p-44">Home</h1>
      </div>
    </>
  );
}

export default Home;
