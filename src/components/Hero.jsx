import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import CanvasLoader from './Loader';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Hardik</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a developer.
          </p>
        </div>
      </div>


        <br/><br/>
          {/* <Canvas
          shadows
          camera={{position: [20, 3, 5], fov: 25}}
          gl={{ preserveDrawingBuffer: true}}>
            
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                />
                <Bot />
            </Suspense>
        </Canvas> */}

        <ComputersCanvas />


      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.75,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-2.5 h-3.5 rounded-full bg-white opacity-50 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero