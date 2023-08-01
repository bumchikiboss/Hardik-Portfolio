import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import HoverVideoPlayer from 'react-hover-video-player';

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"


const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            10,     // max tilt rotation (degrees)
	scale:          1.5,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          100,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         'ease',    // Easing on enter/exit.
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  videoSrc,
}) => {
  return (
      <Tilt
        options={
          defaultOptions
        }
        className='bg-white opacity-90 shadow-cyan-900 shadow-card p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>

        <div className='relative w-full h-[230px] shadow-lg'>
          {/* <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          /> */}

                  <HoverVideoPlayer
                        videoSrc={videoSrc}
                        className='w-full h-full object-cover rounded-2xl'
                        pausedOverlay={
                          <img
                            src={image}
                            alt="image"
                            className='w-full h-full object-cover '
                          />
                        }
                        loadingOverlay={
                          <div className="loading-overlay">
                            <div className="loading-spinner" />
                          </div>
                        }
                      />

          <div className='absolute inset-y-50 flex justify-end mt-3 card-img_hover '>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-2'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-16'>
          <h3 className='text-black font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </motion.div>
      </Tilt>
    
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");