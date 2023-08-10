import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ar,
    game,
    ai,
    browser,
    xrd,
    zscaler,
    costa,
    unity,
    c,
    cplus,
    csharp,
    photoshop,
    arcore,
    vstudio,
    vuforia,
    python,
    quill,
    ardunk,
    race,
    arbook,
    games,
    ardunkvid,
  racevid,
  arbookvid,
  quillvid,
  gamesvid,
  senti,
  sentivid,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AR Development",
      icon: ar,
    },
    {
      title: "Game Development",
      icon: game,
    },
    {
      title: "ML & Data Science",
      icon: ai,
    },
    {
      title: "Web Development",
      icon: browser,
    },
  ];
  
  const technologies = [
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "PhotoShop",
      icon: photoshop,
    },
    {
      name: "AR Core",
      icon: arcore,
    },
    {
      name: "Visual Studio",
      icon: vstudio,
    },
    {
      name: "Vuforia",
      icon: vuforia,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  ];
  
  const experiences = [
    {
      title: "Unreal Engine Developer (Intern)",
      company_name: "Costa Cloud - Appolo Computers Pvt Ltd.",
      icon: costa,
      iconBg: "white",
      date: "July 2022 - August 2022",
      points: [
        "Responsible for play testing and script editing on the AI Drone Path Finding project.",
        "Created a Character + Drone Controller.",
        "Created Autonomous Drone Controller with Simple Path Finding.",
      ],
    },
    {
      title: "AR Developer (Intern)",
      company_name: "XRDigitech Global Pvt. Ltd.",
      icon: xrd,
      iconBg: "white",
      date: "July 2022 - January 2023",
      points: [
        "Developed a 2D - Top Down Shooter Game.",
        "Developed an AR Basketball experience with features like Ball physics, Net Simulation and AR implementation.",
        "Developed an AR Racing experience with features like Car controller/physics and AR implementation.",
        "Provided support on Christmas AR project which was showcased in a tech fair.",
      ],
    },
    {
      title: "Web - Backend Developer (Intern)",
      company_name: "Zscaler",
      icon: zscaler,
      iconBg: "#0076BE",
      date: "February 2023 - August 2023",
      points: [
        "Learned Drupal CMS and followed best Drupal Practices and collaborated with the Backend team, Frontend team and QA team on the projects",
        "Provided support in R&D, Bug Fixing and implementing functionalities while following best security practices as working with a security company.",
        "Provided support on Upgrading Drupal 9 to Drupal 10 with the Contrib and Custom modules.",
        "Provided Documentation on site-portal, backend processes and automating git leaks.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    //},
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    
    {
      name: "Dunk-it AR - An AR Basketball Game",
      description:
      "An AR Based Basketball game made with Unity using AR Foundation. Implemented things like Ball physics, Net cloth mesh, Menu UI and more with AR.",
      tags: [
        {
          name: "Unity3D",
          color: "blue-text-gradient",
        },
        {
          name: "AR Core",
          color: "green-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "pink-text-gradient",
        },
      ],
      image: ardunk,
      videoSrc: ardunkvid,
      source_code_link: "https://github.com/",
    },
    {
      name: "AR Racing Game",
      description:
      "An AR Racing Game made with Unity3D and AR Foundation. Implemented various things like Car controller with drift mechanics, touch controlls, race track and more in AR",
      tags: [
        {
          name: "Unity3D",
          color: "blue-text-gradient",
        },
        {
          name: "AR Core",
          color: "green-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "pink-text-gradient",
        },
      ],
      image: race,
      videoSrc: racevid,
      source_code_link: "https://github.com/",
    },
    {
      name: "Other AR Projects using Vuforia",
      description:
      "Some other projects made using Vuforia with Unity3D. An AR Book with 3D Solor System and an AR Metro Card.",
      tags: [
        {
          name: "Unity3D",
          color: "blue-text-gradient",
        },
        {
          name: "Vuforia",
          color: "green-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "pink-text-gradient",
        },
      ],
      image: arbook,
      videoSrc: arbookvid,
      source_code_link: "https://github.com/",
    },
    
    {
      name: "Quill's Revenge - 2D Top Down Shooter",
      description:
        "A 2D Top Down Shooter WebGL Game made with Unity. Implementation of Character Animations, Physics, Enemy AI and more.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "green-text-gradient",
        },
        {
          name: "C#",
          color: "pink-text-gradient",
        },
      ],
      image: quill,
      videoSrc: quillvid,
      source_code_link: "https://bumchikiboss.itch.io/",
    },
    {
      name: "2D Games with Custom Assets",
      description:
      "Some other projects made with Unity3D using self made custom assets. Attractive assets like Characters, Environments, Weapons, etc, were made in Photoshop.",
      tags: [
        {
          name: "Unity3D",
          color: "blue-text-gradient",
        },
        {
          name: "Photoshop",
          color: "green-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "pink-text-gradient",
        },
      ],
      image: games,
      videoSrc: gamesvid,
      source_code_link: "https://github.com/",
    },
    {
      name: "Sentiment Analysis",
      description:
      "Twitter sentiment analysis projects using Twitter extraction and Kaggle database. Deep dive into Ukraine & Russia war Twitter sentiment analysis with lots of graph study.",
      tags: [
        {
          name: "NumPy, Pandas & NLTK",
          color: "blue-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "green-text-gradient",
        },
        {
          name: "Kaggle",
          color: "pink-text-gradient",
        },
      ],
      image: senti,
      videoSrc: sentivid,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };