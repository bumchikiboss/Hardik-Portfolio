import { useState, useRef } from "react";
import { color, motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper2 } from "../hoc"
import { slideIn } from "../utils/motion"

//template_j5knr9s
//service_cnl1qdc
//hjqI0WrIT0G7zXGmR

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        //'service_4tn09vs',
        'template_j5knr9s',
        {
          from_name: form.name,
          to_name: "Hardik Solanki",
          from_email: form.email,
          to_email: "mailtohardiksolanki@gmail.com",
          message: form.message,
        },
        'hjqI0WrIT0G7zXGmR'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  return (
    
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
        
        <motion.div 
          variants={slideIn('left',"tween",0.2,1)}
          className="flex-[0.60] p-8 rounded-2xl"
        >
          
          <p className={styles.sectionSubText}>Get in Touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex-col flex gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-bold mb-4">Your Name</span>
                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's Your Name??"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border font-medium " />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-bold mb-4">Your Email</span>
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's Your Email??"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border font-medium " />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-bold mb-4">Your Message</span>
                <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say??"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border font-medium " />
              </label>
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold rounded-xl active:bg-violet-950 border-2 active:border-slate-500y"
                >Send</button>
            </form>
        </motion.div>
        <motion.div
        variants={slideIn('right',"tween",0.2,1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas/>

        </motion.div>
      </div>
  )
}

export default SectionWrapper2(Contact,"contact");









