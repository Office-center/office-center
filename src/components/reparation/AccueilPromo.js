import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./FormTD";
import Typical from 'react-typical';

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
              <Typical loop={Infinity} wrapper='b' steps={[
                'votre téléphone', 2000,
                'votre tablette', 2000,
                'votre ordinateur', 2000,
                'votre site web', 2000,
                'également votre estime. Vous êtes beau vue de loin ...', 2000
              ]} />
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Promo;
