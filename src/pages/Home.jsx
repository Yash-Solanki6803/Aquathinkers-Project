import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import "./Home.css";

const chemoImages = [
  "photoCarousel/BlackSmoker.jpg",
  "photoCarousel/DeepSeaMicro2-5-24-19.png",
  "photoCarousel/Fauna_on_hydrothermal_vents.jpg",
  "photoCarousel/Fkt230303-PuyDesFolles-BirthdayVent.jpg",
  "photoCarousel/Gollner_Riftia_pachyptila.png",
  "photoCarousel/mars-faculty-monnesh-0824.jpg",
];

const photoImages = [
  "photoCarousel/brian-yurasits-EQlwRGr5sqk-unsplash.jpg",
  "photoCarousel/pedro-silva-ZjEO0TZTgvA-unsplash.jpg",
  "photoCarousel/thomas-peham-jisk3DT0OsU-unsplash.jpg",
  "photoCarousel/elin-snis-ISFlVJaM6sc-unsplash.jpg",
  "photoCarousel/vasilina-sirotina-yLfHrQ70iXo-unsplash.jpg",
  "photoCarousel/vasilina-sirotina-wR9R9siq9gM-unsplash.jpg",
];

const chemosynthesis = [
  {
    title: "Discovery",
    description:
      "In 1977, chemosynthesis was discovered at deep-sea hydrothermal vents.",
  },
  {
    title: "Pioneering Life Forms",
    description:
      "The first chemosynthetic organisms were chemoautotrophic bacteria.",
  },
  {
    title: "Diverse Life Forms",
    description:
      "Chemosynthesis supports a variety of life forms, including tube worms, clams, and certain species of shrimp, which rely on symbiotic bacteria for nutrition.",
  },
  {
    title: "Oxygen Contribution",
    description:
      "Chemosynthesis contributes to the Earth’s carbon cycle by supporting life in nutrient-rich environments.",
  },
  {
    title: "Mars Confirmation",
    description:
      "The Curiosity rover confirmed chemosynthesis on Mars in 2018.",
  },
  {
    title: "Extraterrestrial Potential",
    description:
      "Chemosynthesis is believed to exist on icy moons like Europa and Enceladus.",
  },
];

const photosynthesis = [
  {
    title: "Discovery",
    description:
      "In 1771, Joseph Priestley demonstrated that plants release oxygen during photosynthesis.",
  },
  {
    title: "Pioneering Life Forms",
    description:
      "Cyanobacteria were the first photosynthetic organisms, crucial to early oxygen production.",
  },
  {
    title: "Varied Forms",
    description:
      "Not just plants—some bacteria and protists also perform photosynthesis, demonstrating the process's diversity across life forms.",
  },
  {
    title: "Sunlight Confirmation",
    description:
      "Jan Ingenhousz confirmed in the 1800s that sunlight is essential for photosynthesis.",
  },
  {
    title: "Chlorophyll Discovery",
    description:
      "Chlorophyll’s structure was identified in 1915, revealing its role in capturing sunlight.",
  },
  {
    title: "Oxygen Production",
    description:
      "Photosynthesis generates about 50% of Earth's oxygen, vital for aerobic organisms.",
  },
];

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            className="video"
            id="hydrothermal-vents-video"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-text">
          <h1 className="text-5xl">Chemosynthetic World</h1>
          <p className="text-xl my-6">
            Explore the deep sea and learn about the creatures that live there
          </p>
          <Link
            to={"/introduction"}
            className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none"
          >
            <span>Know more</span>
          </Link>
        </div>
      </section>
      <section className="origin-section">
        <div className="container mx-auto px-6 py-6">
          <h2 className="text-center text-4xl text-gray-200">Origin of Life</h2>

          <div className="glass rounded-lg flex justify-between content-center my-4 p-4 gap-16">
            <div className="w-2/6">
              <img
                src="evolution\OriginOfLife.jpg"
                alt="Origin of Life"
                className="rounded-lg w-full"
                height={400}
                width={400}
              />
            </div>
            <div className="w-5/6 text-2xl text-gray-200 flex content-center">
              <p className="text-justify">
                Life on Earth likely began around 4 billion years ago when
                simple molecules, powered by volcanic activity, lightning, and
                sunlight, formed complex organic compounds. These evolved into
                the first organisms in nutrient-rich environments, eventually
                leading to the diverse life we see today. The origin of life
                remains an area of active scientific research. Scientists are
                studying early Earth conditions and extraterrestrial samples to
                understand how life emerged and evolved on our planet.
              </p>
            </div>
          </div>

          <div className="glass rounded-lg flex flex-row-reverse justify-between content-center my-4 p-4 gap-16">
            <div className="w-2/6">
              <img
                src="synthesis\0_step1.jpg"
                alt="Origin of Life"
                className="rounded-lg w-full"
              />
            </div>
            <div className="w-5/6 text-2xl text-gray-200 flex justify-center content-center">
              <p className="text-justify">
                Photosynthesis began around 2.5 billion years ago when early
                organisms used sunlight to turn carbon dioxide and water into
                energy, releasing oxygen. This process transformed Earth&apos;s
                atmosphere and paved the way for complex life to evolve.
                Photosynthetic organisms like plants, algae, and cyanobacteria
                continue to play a crucial role in producing oxygen and
                sustaining life on our planet.
              </p>
            </div>
          </div>

          <div className="glass rounded-lg flex justify-between content-center my-4 p-4 gap-16">
            <div className="w-2/6">
              <img
                src="synthesis\1_step1.jpg"
                alt="Origin of Life"
                className="rounded-lg w-full"
              />
            </div>
            <div className="w-5/6 text-2xl text-gray-200 flex content-center">
              <p className="text-justify">
                Chemosynthesis began in deep-sea hydrothermal vents, where early
                organisms used chemicals like hydrogen sulfide to produce energy
                in the absence of sunlight. This process allowed life to thrive
                in extreme environments, supporting ecosystems deep beneath the
                ocean&apos;s surface. Chemosynthetic organisms like tube worms,
                mussels, and giant clams form the foundation of these unique
                ecosystems. These organisms are crucial for understanding
                life&apos;s adaptability and resilience.
              </p>
            </div>
          </div>

          <div className="flex justify-between content-center gap-4">
            <Carousel images={chemoImages} synthesis={chemosynthesis} />
            <Carousel images={photoImages} synthesis={photosynthesis} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
