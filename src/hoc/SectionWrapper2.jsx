import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';
import { Tilt } from 'react-tilt';

const SectionWrapper = (Component, idName) => function HOC(){

    return(
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: true, amount: 0.25}}
            className={`${styles.padding}`}
            >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper