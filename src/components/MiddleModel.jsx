import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import MidModel from "./canvas/MidModel";

const MiddleModel = () => {
    return(
        <section className="relative w-full h-screen mx-auto">
          <MidModel />
        </section>
    )
}
export default MiddleModel