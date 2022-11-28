import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./FormTD";

const Promo = () => {

  return (
    <>
      <main>
        <section id="header">
          <div className="header-container">
            <div className="myCanva mx-auto">
              <Canvas camera={{ fov: 80, position: [0, 0, 100] }}>
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <Model />
              </Canvas>
            </div>
            <h1 className="text-[36px]">WorkUnion</h1>
            <div className=" accroche">
              On répare{' '}
              <span className="header-msg">
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Promo;
