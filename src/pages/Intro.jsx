import island from "../../public/intro/Island.png";
import coral from "../../public/intro/Coral.png";
import hydrovent from "../../public/intro/Hydrovent.png";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <main className="relative">
      <section className="z-0 h-[340vh]">
        <div className="w-screen h-[80vh] bg-sky-gradient relative">
          <div
            className="w-[40vw] aspect-square  absolute right-0 -bottom-72
           "
          >
            <img
              src={island}
              className="object-cover"
              alt="Image on an Island with coconut trees and a Yacht"
            />
          </div>
        </div>
        <div className="w-screen h-[80vh] bg-water-gradient-1 relative border-t-2 rounded-lg">
          <div
            className="w-[30vw] aspect-square  absolute -left-32 top-32
           "
          >
            <img
              src={coral}
              className="object-cover drop-shadow-dark"
              alt="Image on an Island with coconut trees and a Yacht"
            />
          </div>
        </div>
        <div className="w-screen h-[80vh] bg-water-gradient-2"></div>
        <div className="w-screen h-screen bg-water-gradient-3 overflow-hidden">
          <div
            className="w-[30vw] aspect-square  absolute right-0 bottom-0 
           "
          >
            <img
              src={hydrovent}
              className="object-cover drop-shadow-light"
              alt="Image on an Island with coconut trees and a Yacht"
            />
          </div>
        </div>
      </section>
      <section className="z-1  w-full h-full absolute top-0 p-20">
        <div className="bg-[rgba(0,0,0,0.15)]   w-full h-full rounded-md p-36 flex flex-col">
          <div className="h-[80vh]">
            <div className="bg-[rgba(255,255,255,0.55)] w-1/2 h-96 rounded-lg p-10 flex flex-col gap-10">
              <h1 className="text-8xl font-bold text-slate-800">
                Harnessing Energy
              </h1>
              <p className="text-4xl  text-slate-700">
                The Sunlit and Dark Pathways of Life
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-10">
            <div className="w-1/2"></div>
            <div className="bg-[rgba(255,255,255,0.45)] w-1/2  rounded-lg p-10 flex flex-col gap-10">
              <h1 className="text-5xl font-bold text-slate-700">
                PHOTOSYNTHESIS
              </h1>
              <p className="text-2xl  text-slate-600">
                Photosynthesis is essential for life, enabling plants, algae,
                and bacteria to convert sunlight into food and release oxygen.
                This process powers ecosystems and sustains life on Earth.
              </p>
              <h2 className="text-4xl font-bold text-slate-600">
                What is Photosynthesis?
              </h2>
              <p className="text-2xl  text-slate-600">
                Photosynthesis is a biological process that converts light
                energy into chemical energy, which is used to fuel the
                metabolism of plants, algae, and some bacteria
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-10 gap-10">
            <div className="bg-[rgba(255,255,255,0.25)] w-1/2  rounded-lg p-10 flex flex-col gap-10">
              <h1 className="text-5xl font-bold text-slate-200">
                Where it Happens:
              </h1>
              <p className="text-2xl  text-slate-200">
                Photosynthesis mainly occurs in the chloroplasts of plant
                leaves. <br /> <strong> Key structures involved :</strong>{" "}
                <br /> <strong> Thylakoids :</strong> Site of light-dependent
                reactions. <br /> <strong>Stroma :</strong>
                Site of the Calvin cycle.
              </p>
              <p className="text-2xl  text-slate-200">
                <strong>
                  Factors Affecting Photosynthesis Light Intensity :
                </strong>{" "}
                <br />
                <strong>Light Intensity : </strong>
                More light increases the rate. <br />
                <strong>CO₂ Concentration : </strong>Higher levels speed up
                glucose production. <br />
                <strong> Water Availability : </strong> Essential for the
                initial reactions. <br />
                <strong>Temperature :</strong> Optimal temperatures enhance
                efficiency.
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.35)] w-1/2  rounded-lg p-10 flex flex-col gap-10">
              <h1 className="text-5xl font-bold text-slate-200">
                How it Works:
              </h1>
              <p className="text-2xl  text-slate-200">
                Light-Dependent Reactions: Sunlight splits water, producing
                oxygen, ATP, and NADPH.
              </p>
              <p className="text-2xl  text-slate-200">
                Calvin Cycle: oxygen, ATP, and NADPH. ATP and NADPH convert CO₂
                into glucose.
              </p>
              <h2 className="text-4xl font-bold text-slate-200">
                Why it is Important:
              </h2>
              <ul className=" text-slate-200">
                <li className="flex items-center gap-4 text-2xl">
                  <h3 className=" font-bold">Produces Food:</h3>{" "}
                  <p>Glucose feeds plants and animals.</p>
                </li>
                <li className="flex items-center gap-4 text-2xl">
                  <h3 className=" font-bold">Releases Oxygen:</h3>{" "}
                  <p>Essential for life.</p>
                </li>
                <li className="flex items-center gap-4 text-2xl">
                  <h3 className=" font-bold">Drives the Food Chain:</h3>{" "}
                  <p>Plants power ecosystems.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Chemosynthesis start here */}
          <div className="flex justify-between mt-10 gap-10">
            <div className="bg-[rgba(255,255,255,0.15)] w-1/2  rounded-lg p-10 flex flex-col gap-10">
              <h1 className="text-5xl font-bold text-slate-200">
                CHEMOSYNTHESIS :
              </h1>
              <p className="text-2xl  text-slate-200">
                Chemosynthesis is the process through which certain bacteria
                convert inorganic compounds into food using chemical energy
                instead of sunlight. It supports ecosystems in extreme
                environments like deep-sea vents.
              </p>
              <p className="text-2xl  text-slate-200">
                <strong>What is Chemosynthesis ?</strong> <br />
                Chemosynthesis uses energy from inorganic molecules (e.g.,
                hydrogen sulphide) to produce glucose (CH₂O). This process is
                vital for life in areas devoid of sunlight.
              </p>
              <p className="text-2xl  text-slate-200">
                <strong>Example Reaction :</strong> <br />
                CO <sub>2</sub>+4H <sub>2</sub> S+O <sub>2</sub> → CH{" "}
                <sub>2</sub>
                O+4S+3H <sub>2</sub>O
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] w-1/2  rounded-lg p-10 flex flex-col gap-10">
              <h1 className="text-5xl font-bold text-slate-200">
                How it Works:
              </h1>
              <p className="text-2xl  text-slate-200">
                Energy Source: Relies on chemical reactions, primarily the
                oxidation of hydrogen sulphide or methane.
              </p>
              <p className="text-2xl  text-slate-200">
                Food Production: Converts carbon dioxide and other compounds
                into glucose, providing energy.
              </p>
              <h2 className="text-4xl font-bold text-slate-200">
                Why it is Important:
              </h2>
              <ul className=" text-slate-200">
                <li className=" items-center gap-4 text-2xl">
                  <h3 className=" font-bold">Ecosystem Support: </h3>{" "}
                  <p>Sustains life in extreme, sunless environments.</p>
                </li>
                <li className=" items-center gap-4 text-2xl">
                  <h3 className=" font-bold">Biodiversity Hotspots:</h3>{" "}
                  <p>Fosters unique communities of specialised species.</p>
                </li>
                <li className="items-center gap-4 text-2xl">
                  <h3 className=" font-bold">Nutrient Cycling:</h3>{" "}
                  <p>
                    Contributes to the balance of essential nutrients in
                    ecosystems.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between mt-10 gap-10">
            <div className=" w-1/2  rounded-lg p-10 flex flex-col gap-10">
              <h1 className="text-5xl font-bold text-slate-200">
                Where it Happens:
              </h1>
              <p className="text-2xl  text-slate-200">
                <strong> Deep-Sea Hydrothermal Vents:</strong> Bacteria oxidise
                hydrogen sulphide from volcanic activity.
                <br /> <strong>Cold Seeps: </strong>
                Bacteria utilise methane and hydrogen sulphide.
              </p>
              <p className="text-2xl  text-slate-200">
                <strong>
                  Factors Affecting Photosynthesis Light Intensity :
                </strong>{" "}
                <br />
                <br />
                <strong>Availability of Inorganic Chemicals : </strong>
                Presence of substrates like H₂S or CH₄.
                <br />
                <strong>Bacterial Presence :</strong>Specialised organisms
                capable of chemosynthesis.
                <br />
                <strong> Environmental Conditions: </strong> EFactors like
                pressure and temperature.
              </p>
            </div>
            <div className="w-1/2 flex flex-col gap-10 mt-40 ">
              <Link
                to={"/evolution"}
                className="bg-blue-950 text-white px-10 py-4 rounded-xl text-2xl dark:bg-blue-400 dark:text-black"
              >
                Check Evolution
              </Link>
              <Link
                to={"/synthesis"}
                className="bg-blue-950 text-white px-10 py-4 rounded-xl text-2xl dark:bg-blue-400 dark:text-black"
              >
                Synthesis Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
