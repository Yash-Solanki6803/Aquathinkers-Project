import { Link, useNavigate, useParams } from "react-router-dom";
import ToggleType from "../components/toggleType/ToggleType";
// import bacteria from "/evolution/0_Algae.jpg";
import { data } from "../data/evolution";

function Evolution() {
  const { organism } = useParams();
  const navigate = useNavigate();
  //   console.log(data[organism]);
  function handleToggle() {
    const complement = data[organism].complement;
    navigate(`/evolution/${complement}`);
  }
  return (
    <main className="relative">
      <div onClick={handleToggle}>
        <ToggleType />
      </div>

      <div className="min-h-[80vh] bg-gradient-to-b from-slate-500 to-white dark:from-slate-800 dark:to-slate-700 transition-all duration-700 py-28 px-40 flex flex-col items-center">
        <h1 className="text-6xl font-bold text-center p-10 dark:text-slate-300">
          {data[organism].title}
        </h1>
        <div className=" w-full flex">
          <div className="w-1/2 h-full  p-32 ">
            <div className="aspect-square  rounded-tr-[30%] rounded-tl-[20%] rounded-br-[25%] rounded-bl-[40%] overflow-hidden">
              <img
                src={data[organism].img}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-1/2 h-full py-40  flex flex-col justify-center gap-10 ">
            <h2 className="font-bold text-slate-950 text-5xl dark:text-slate-300">
              Meaning :{" "}
            </h2>
            <p className="text-3xl text-slate-800 dark:text-slate-400">
              {data[organism].meaning}
            </p>
            <h2 className="font-bold text-slate-950 text-5xl dark:text-slate-300">
              Origin:
            </h2>
            <p className="text-3xl text-slate-800 dark:text-slate-400">
              {data[organism].origin}
            </p>
            <h2 className="font-bold text-slate-950 text-5xl dark:text-slate-300">
              Diet:
            </h2>
            <p className="text-3xl text-slate-800 dark:text-slate-400">
              {data[organism].diet}
            </p>
            <h2 className="font-bold text-slate-950 text-5xl dark:text-slate-300">
              Environment:{" "}
            </h2>
            <p className="text-3xl text-slate-800 dark:text-slate-400">
              {data[organism].environment}
            </p>
          </div>
        </div>
        <div className="w-[80vw] h-[2px] bg-slate-400 my-20"></div>
        <div className="h-[50vh]  w-full p-10 flex flex-col gap-10">
          <h1 className="text-6xl font-bold dark:text-slate-300">
            What is the next Evolution??
          </h1>
          <p className="text-2xl dark:text-slate-400">{data[organism].next}</p>
          <div className="w-full flex justify-around">
            {data[organism].evolutions.map((evolution, index) => (
              <Link
                key={index}
                to={evolution.href}
                className="bg-blue-950 text-white px-10 py-4 rounded-xl text-2xl dark:bg-blue-400 dark:text-black"
              >
                {evolution.title}
              </Link>
            ))}
            {/* <button className="bg-blue-950 text-white px-10 py-4 rounded-xl text-2xl dark:bg-blue-400 dark:text-black">
              Evolve
            </button>
            <button className="bg-blue-950 text-white px-10 py-4 rounded-xl text-2xl  dark:bg-blue-400 dark:text-black">
              Evolve
            </button> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Evolution;
