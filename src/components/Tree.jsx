import { useNavigate } from "react-router-dom";
import { useStore } from "../store";

function convertToLowercaseNoSpaces(str) {
  return str.toLowerCase().replace(/\s+/g, "");
}

const TreeNode = ({ cx, cy, label, setOpen }) => {
  const route = convertToLowercaseNoSpaces(label);
  const navigate = useNavigate();
  return (
    <>
      {/* Circle for the node */}
      <circle
        cx={cx}
        cy={cy}
        r="65"
        stroke="black"
        strokeWidth="1"
        fill="lightblue"
      />
      {/* Text label in the node */}
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="20"
        fill="black"
        onClick={() => {
          navigate(`/evolution/${route}`);
          setOpen(false);
        }}
      >
        {label}
      </text>
    </>
  );
};

const Tree = ({ setOpen }) => {
  const synthesisType = useStore((state) => state.synthesisType);
  const photoArray = [
    "Cynobacteria",
    "Algae",
    "Primitive Plants",
    "Ferns",
    "Conifers",
    "Angiosperms",
    "Symbiotic Plants",
    "Predatory Plants",
  ];

  const chemoArray = [
    "Chemobacteria",
    "Chemosponges",
    "Chemoworms",
    "Chemo Crustaceans",
    "Chemotube Cities",
    "Chemo Predators",
    "Symbiotic hubs",
    "Chemo Sentients",
  ];
  let array = synthesisType ? chemoArray : photoArray;

  // Define positions for each node
  const positions = {
    root: { x: 400, y: 100 },
    child1: { x: 200, y: 250 },
    child2: { x: 550, y: 250 },
    grandchild1: { x: 100, y: 400 },
    grandchild3: { x: 400, y: 400 },
    grandchild4: { x: 600, y: 400 },

    greatGrandchild3: { x: 400, y: 575 },
    greatGrandchild4: { x: 600, y: 575 },
  };

  return (
    <svg width="800" height="1800">
      {/* Lines connecting nodes */}
      <line
        x1={positions.root.x}
        y1={positions.root.y}
        x2={positions.child1.x}
        y2={positions.child1.y}
        stroke="black"
      />
      <line
        x1={positions.root.x}
        y1={positions.root.y}
        x2={positions.child2.x}
        y2={positions.child2.y}
        stroke="black"
      />

      <line
        x1={positions.child1.x}
        y1={positions.child1.y}
        x2={positions.grandchild1.x}
        y2={positions.grandchild1.y}
        stroke="black"
      />

      <line
        x1={positions.child2.x}
        y1={positions.child2.y}
        x2={positions.grandchild3.x}
        y2={positions.grandchild3.y}
        stroke="black"
      />
      <line
        x1={positions.child2.x}
        y1={positions.child2.y}
        x2={positions.grandchild4.x}
        y2={positions.grandchild4.y}
        stroke="black"
      />

      <line
        x1={positions.grandchild3.x}
        y1={positions.grandchild3.y}
        x2={positions.greatGrandchild3.x}
        y2={positions.greatGrandchild3.y}
        stroke="black"
      />
      <line
        x1={positions.grandchild4.x}
        y1={positions.grandchild4.y}
        x2={positions.greatGrandchild4.x}
        y2={positions.greatGrandchild4.y}
        stroke="black"
      />

      {/* Nodes */}
      <TreeNode
        cx={positions.root.x}
        cy={positions.root.y}
        label={array[0]}
        setOpen={setOpen}
      />
      <TreeNode
        cx={positions.child1.x}
        cy={positions.child1.y}
        label={array[1]}
        setOpen={setOpen}
      />
      <TreeNode
        cx={positions.child2.x}
        cy={positions.child2.y}
        label={array[2]}
        setOpen={setOpen}
      />

      <TreeNode
        cx={positions.grandchild1.x}
        cy={positions.grandchild1.y}
        label={array[3]}
        setOpen={setOpen}
      />

      <TreeNode
        cx={positions.grandchild3.x}
        cy={positions.grandchild3.y}
        label={array[4]}
        setOpen={setOpen}
      />
      <TreeNode
        cx={positions.grandchild4.x}
        cy={positions.grandchild4.y}
        label={array[5]}
        setOpen={setOpen}
      />

      <TreeNode
        cx={positions.greatGrandchild3.x}
        cy={positions.greatGrandchild3.y}
        label={array[6]}
        setOpen={setOpen}
      />
      <TreeNode
        cx={positions.greatGrandchild4.x}
        cy={positions.greatGrandchild4.y}
        label={array[7]}
        setOpen={setOpen}
      />
    </svg>
  );
};

export default Tree;
