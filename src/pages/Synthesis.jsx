/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import "./Synthesis.css";

{
  /* Data:

- Process (Photosynthesis):
  - Stage 1: Light-Dependent Reactions  
    - Occurs in thylakoid membranes of chloroplasts.
    - Sunlight absorbed by chlorophyll.
    - Water molecules (H₂O) split in photolysis, releasing oxygen (O₂).
    - Produces protons (H⁺) and electrons (e⁻).
    - Generates ATP and NADPH as energy carriers for the next stage.
    - Reaction: 2H₂O → 4H⁺ + 4e⁻ + O₂.

  - Stage 2: Calvin Cycle (Light-Independent Reactions)  
    - Occurs in the stroma of chloroplasts.
    - Uses ATP and NADPH from the light-dependent reactions.
    - Converts carbon dioxide (CO₂) into glucose (C₆H₁₂O₆).
    - Carbon fixation via enzyme Rubisco combines CO₂ with RuBP.
    - Produces 3-phosphoglycerate (3-PGA), then G3P, which forms glucose.
    - Regenerates ADP and NADP⁺ for reuse in the light-dependent reactions.

- Process (Chemosynthesis):
  - Stage 1: Oxidation of Inorganic Molecules
    - Occurs in the presence of chemosynthetic bacteria, often near hydrothermal vents.
    - Inorganic molecules, such as hydrogen sulfide (H₂S) or methane (CH₄), are oxidized to release energy.
    - This process generates protons (H⁺) and electrons (e⁻) from the oxidation reaction.
    - The released electrons are used to reduce carbon dioxide (CO₂) into organic compounds.
    - Overall reaction example: 
      - For hydrogen sulfide: 
        - 4H₂S + 6CO₂ → C₆H₁₂O₆ + 4H₂O + 4S.

  - Stage 2: Synthesis of Organic Compounds
    - Occurs in the cytoplasm of chemosynthetic bacteria.
    - Utilizes energy derived from the oxidation of inorganic molecules.
    - Converts carbon dioxide (CO₂) into glucose (C₆H₁₂O₆) through various biochemical pathways.
    - Involves processes similar to the Calvin cycle, such as the fixation of carbon dioxide.
    - Generates organic matter that supports various life forms, including those living in symbiosis with bacteria. 
    - Regenerates co-factors like NADH or ATP for use in metabolic processes.

- Contributors (Photosynthesis):
  - Sun: Provides sunlight for photosynthesis.
  - Chlorophyll: Absorbs light energy for the process.
  - Water (H₂O): Split in photolysis to release oxygen and electrons.
  - Carbon dioxide (CO₂): Converted into glucose during the Calvin Cycle.
  - ATP (Adenosine Triphosphate): Energy carrier for cellular processes.
  - NADPH (Nicotinamide Adenine Dinucleotide Phosphate): Electron carrier for redox reactions.

- Contributors (Chemosynthesis):
  -Chemosynthetic Bacteria**: The primary organisms driving chemosynthesis.
  -Hydrogen Sulfide (H₂S)**: A key chemical energy source for many chemosynthetic bacteria.
  -Carbon Dioxide (CO₂)**: Used by bacteria to produce organic compounds.
  -Oxygen (O₂)**: Acts as an electron acceptor in some chemosynthetic reactions.
  -Hydrothermal Vents**: Deep-sea environments that provide the necessary chemicals for chemosynthesis.
  -Symbiotic Relationships**: Organisms like tube worms depend on chemosynthetic bacteria for nutrition.

  */
}

function Synthesis() {
  return (
    <>
      <Navbar />
      <section className="h-2/4 bg-gradient-to-b from-slate-600 to-white">
        <div className="container mx-auto px-6 py-6">
          <h1 className="text-5xl text-center pt-24">
            Synthesis Type
          </h1>

          {/* Two synthesis */}
          <div className="flex justify-evenly content-center gap-20 my-12">
            {/* Photosynthesis */}
            <div className="glass rounded-lg h-auto w-3/6 p-4 flex flex-col gap-4 content-center">
              <h2 className="text-3xl text-center">Photosynthesis</h2>
              <img
                src="https://www.science-sparks.com/wp-content/uploads/2020/04/Photosynthesis-Diagram-1536x1138.jpg.webp"
                alt="Photosynthesis"
                className="rounded-lg m-auto"
                width={400}
              />
              <p className="text-center">
                Photosynthesis is the process by which green plants and some
                other organisms use sunlight to synthesize foods with the help
                of chlorophyll. The process converts light energy into chemical
                energy and stores it in glucose.
              </p>
            </div>

            {/* Chemosynthesis */}
            <div className="glass rounded-lg h-auto w-3/6 p-4 flex flex-col gap-4 justify-center content-center">
              <h2 className="text-3xl text-center">Chemosynthesis</h2>
              <img
                src="https://teara.govt.nz/files/large_images/8960-enz_0.jpg"
                alt="Chemosynthesis"
                className="rounded-lg m-auto"
                width={300}
              />
              <p className="text-center">
                Chemosynthesis is the process by which certain bacteria
                synthesize organic compounds from inorganic compounds. The
                energy required for this process comes from the oxidation of the
                inorganic compounds.
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="container mx-auto px-6 py-6">
          <h1 className="text-5xl text-center mb-2">Process</h1>
          {/* Subtext */}
          <p className="text-center text-lg text-gray-700 mb-8">
            Photosynthesis occurs in two main stages: the light-dependent
            reactions and the Calvin cycle (also known as light-independent
            reactions).
          </p>

          {/* Stage-1 */}
          <div className="glass rounded-lg flex justify-between content-center my-4 p-4 gap-16">
            <div className="w-3/4 text-2xl flex content-center">
              <ul className="list-disc list-inside">
                <h4 className="text-3xl font-bold mb-2">
                  Light-Dependent Reactions
                </h4>

                <li>Occurs in thylakoid membranes of chloroplasts</li>
                <li>Sunlight absorbed by chlorophyll</li>
                <li>Water molecules (H₂O) split in photolysis</li>
                <li>Releases oxygen (O₂), protons (H⁺), and electrons (e⁻)</li>
                <li>Generates ATP and NADPH</li>
                <li>Overall reaction: 2H₂O → 4H⁺ + 4e⁻ + O₂</li>
              </ul>
            </div>
            <div className="w-2/6">
              <img
                src="https://www.sciencefacts.net/wp-content/uploads/2020/11/Light-Dependent-Reactions.jpg"
                alt="Photosynthesis"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Stage-2 */}
          <div className="glass rounded-lg flex justify-between content-center my-4 p-4 gap-16">
            <div className="w-3/4 text-2xl flex content-center">
              <ul className="list-disc list-inside">
                <h4 className="text-3xl font-bold mb-2">
                  Calvin Cycle (Light-Independent Reactions)
                </h4>
                <li>Occurs in the stroma of chloroplasts</li>
                <li>Uses ATP and NADPH from light-dependent reactions</li>
                <li>Converts carbon dioxide (CO₂) into glucose (C₆H₁₂O₆)</li>
                <li>Carbon fixation with enzyme Rubisco</li>
                <li>Produces 3-phosphoglycerate (3-PGA), then G3P</li>
                <li>G3P molecules combine to form glucose</li>
                <li>Regenerates ADP and NADP⁺ for reuse</li>
              </ul>
            </div>
            <div className="w-2/6">
              <img
                src="synthesis/calvin-cycle.jpeg"
                alt="Photosynthesis"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Contributors */}
        <div className="container mx-auto px-6 py-6">
          <h1 className="text-5xl text-center mb-6">Contributors</h1>
          {/* Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Sun Card with only image and Sun text*/}
            <div className="glass rounded-lg flex flex-col justify-center content-center p-4">
              <img
                src="https://science.nasa.gov/wp-content/uploads/2023/05/pia03149-copy.jpg?w=1024"
                alt="Sun"
                className="rounded-lg m-auto"
                width={300}
              />
              <p className="text-center text-xl mt-2">Sun</p>
            </div>
            {/* Chlorophyll */}
            <div className="glass rounded-lg flex flex-col justify-center content-center p-4">
              <img
                src="https://cdn.britannica.com/76/53076-050-BB83032D/stacks-membrane-vesicles-stroma-matrix-chlorophyll-membranes.jpg"
                alt="Chlorophyll"
                className="rounded-lg m-auto"
                width={300}
              />
              <p className="text-center text-xl mt-2">Chlorophyll</p>
            </div>
            {/* Water h2o */}
            <div className="glass rounded-lg flex flex-col justify-center content-center p-4">
              <img
                src="https://img.freepik.com/premium-vector/water-h2o-molecule-models-blue-chemical-formulas-natural_228260-462.jpg"
                alt="Water"
                className="rounded-lg m-auto"
                width={300}
              />
              <p className="text-center text-xl mt-2">Water (H₂O)</p>
            </div>
            {/* Carbon dioxide co2 */}
            <div className="glass rounded-lg flex flex-col justify-center content-center p-4">
              <img
                src="https://www.shutterstock.com/image-vector/carbon-dioxide-co2-molecule-models-600nw-2086893943.jpg"
                alt="Carbon dioxide"
                className="rounded-lg m-auto"
                width={300}
              />
              <p className="text-center text-xl mt-2">Carbon dioxide (CO₂)</p>
            </div>
            {/* ATP (Adenosine Triphosphate) */}
            <div className="glass rounded-lg flex flex-col justify-center content-center p-4">
              <img
                src="https://sciencenotes.org/wp-content/uploads/2022/12/What-Is-ATP-in-Biology.png"
                alt="ATP"
                className="rounded-lg m-auto"
                width={300}
              />
              <p className="text-center text-xl mt-2">
                ATP (Adenosine Triphosphate)
              </p>
            </div>
            {/* NADPH (Nicotinamide Adenine Dinucleotide Phosphate) */}
            <div className="glass rounded-lg flex flex-col justify-center content-center p-4">
              <img
                src="https://www.researchgate.net/publication/331054192/figure/fig1/AS:725645302702085@1550018730306/The-nicotinamide-adenine-dinucleotide-phosphate-NAPDH-oxidase-NOX-complex-and-its.png"
                alt="NADPH"
                className="rounded-lg m-auto"
                width={300}
              />
              <p className="text-center text-xl mt-2">
                NADPH (Nicotinamide Adenine Dinucleotide Phosphate)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Synthesis;
