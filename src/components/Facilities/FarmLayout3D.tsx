import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

function FarmLayout3D() {
  return (
    <div className="w-full h-[30rem] bg-[#f8f5f2] rounded-[1rem] overflow-hidden mt-[4rem] shadow-2xl">
      <Canvas
        camera={{ position: [35, 30, 35], fov: 45 }}
        dpr={[1, 1.5]}
        frameloop="demand"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[20, 20, 10]} intensity={0.8} />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#e9e5df" />
        </mesh>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[8, 70]} />
          <meshStandardMaterial color="#ccc4ba" />
        </mesh>

        {Array.from({ length: 12 }).map((_, i) => (
          <Tree key={i} position={[-45, 0, -30 + i * 6]} />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <Tree key={i + 100} position={[45, 0, -30 + i * 6]} />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <Tree key={i + 200} position={[-30 + i * 10, 0, -45]} />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <Tree key={i + 300} position={[-30 + i * 10, 0, 45]} />
        ))}

        {buildings.map((b, i) => (
          <OpenBuilding
            key={i}
            position={b.position as [number, number, number]}
            size={b.size as [number, number, number]}
            color={b.color}
            label={b.label}
          />
        ))}

        {pigPositions.map((pos, idx) => (
          <Pig key={idx} position={pos} />
        ))}

        <Text
          position={[0, 0.1, 37]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={1.8}
          color="#777"
          anchorX="center"
          anchorY="middle"
        >
          Rodolívio
        </Text>

        <OrbitControls enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}

function OpenBuilding({
  position,
  size,
  color,
  label,
}: {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  label: string;
}) {
  const wallThickness = 0.2;
  const wallHeight = 0.8;
  return (
    <group position={position}>
      <mesh position={[0, wallHeight / 2, -(size[2] / 2) + wallThickness / 2]}>
        <boxGeometry args={[size[0], wallHeight, wallThickness]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, wallHeight / 2, size[2] / 2 - wallThickness / 2]}>
        <boxGeometry args={[size[0], wallHeight, wallThickness]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[-(size[0] / 2) + wallThickness / 2, wallHeight / 2, 0]}>
        <boxGeometry args={[wallThickness, wallHeight, size[2]]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[size[0] / 2 - wallThickness / 2, wallHeight / 2, 0]}>
        <boxGeometry args={[wallThickness, wallHeight, size[2]]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Text
        position={[0, wallHeight + 0.4, 0]}
        fontSize={1}
        color="#333"
        anchorX="center"
      >
        {label}
      </Text>
    </group>
  );
}

function Tree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1.6]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.8, 8, 8]} />
        <meshStandardMaterial color="#3b7d3a" />
      </mesh>
    </group>
  );
}

function Pig({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.3, 8, 8]} />
      <meshStandardMaterial color="#ffb6b9" />
    </mesh>
  );
}

const buildings = [
  {
    position: [-25, 0, 20],
    size: [10, 2, 6],
    color: "#ac7771",
    label: "Área Administrativa",
  },
  {
    position: [-10, 0, 22],
    size: [4, 2, 4],
    color: "#d3a79c",
    label: "Escifário",
  },
  {
    position: [-25, 0, -5],
    size: [8, 2, 8],
    color: "#b8b0a1",
    label: "Dejetos",
  },
  {
    position: [-25, 0, -20],
    size: [8, 2, 8],
    color: "#c7c2b8",
    label: "Compostagem",
  },
  {
    position: [10, 0, 28],
    size: [12, 2, 6],
    color: "#ffe5d4",
    label: "Reprodutoras",
  },
  {
    position: [10, 0, 18],
    size: [12, 2, 6],
    color: "#ffd1b3",
    label: "Gestação",
  },
  {
    position: [10, 0, 8],
    size: [12, 2, 6],
    color: "#ffc2a1",
    label: "Maternidade",
  },
  {
    position: [10, 0, -2],
    size: [12, 2, 6],
    color: "#ffb08f",
    label: "Crèche",
  },
  {
    position: [10, 0, -12],
    size: [12, 2, 6],
    color: "#ff9e7d",
    label: "Engorda",
  },
];

const pigPositions: [number, number, number][] = [
  [10, 1, 8],
  [11, 1, 8],
  [9, 1, 8],
  [10, 1, -2],
  [11, 1, -2],
  [9, 1, -2],
  [10, 1, -12],
  [11, 1, -12],
  [9, 1, -12],
];

export { FarmLayout3D };
