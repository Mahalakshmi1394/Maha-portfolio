import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  projectPortfolio,
  projectBraintumor,
  projectBillsplit,
  projectHabitTracker,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";



export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Contact" },
];

export const services = [
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences. 
                  From wireframes to high-fidelity prototypes, I focus on creating intuitive interfaces that 
                  blend creativity and functionality, enhancing engagement and usability.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites tailored to your needs. 
    Using modern technologies like React, Node.js, and more, I ensure your site is optimized 
    for speed, scalability, and accessibility, delivering a robust online presence.`,
  },
  {
    title: "Content Creation",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Producing compelling digital content that resonates with your audience. From blogs 
                  and technical documentation to engaging website copy, I ensure your brand's message 
                  is clear, impactful, and aligned with your business goals.`,
  },
];

export const projects = [
  {
    title: "RescueRoute",
    image: project1,
    category: "Web",
    description: `Crowdsourced emergency management lets users report incidents on a live map with location, photos, and details. A request-response system connects victims with nearby help instantly. Users can donate essentials via a donation cart.`,
    demoLink: "https://github.com/Mahalakshmi1394/Rescue-Route",
    stacks: [
      {
        name: "XD",
        logo: xd,
      },
    ],
  },
  {
    title: "Civic Alert System",
    image: project2,
    category: "Web",
    description: `A blockchain-based civic alert system allows citizens to securely report issues like potholes or leaks. Each alert is verified through GIV for trusted user access. Users can track issue resolution in real-time, ensuring transparency.`,
    demoLink: "https://github.com/Mahalakshmi1394/Civic-Alert-System",
  },
  {
    title: "Maha Portfolio",
    image: projectPortfolio,
    category: "Web",
    description: `A personal portfolio website showcasing skills, projects, and services. Built with React and Tailwind CSS for a responsive, modern, and interactive user experience. It highlights my expertise in web development and design with a clean, professional aesthetic.`,
    demoLink: "https://github.com/Mahalakshmi1394/Maha-portfolio",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Brain Tumor Segmentation",
    image: projectBraintumor,
    category: "AI/ML",
    description: `A deep learning model for accurately segmenting and identifying brain tumor stages from MRI scans. Utilizes advanced neural networks (CNNs/U-Net) to assist in early medical diagnosis by highlighting affected regions with high precision.`,
    demoLink: "https://github.com/Mahalakshmi1394/Braintumor_New",
    stacks: [],
  },
  {
    title: "Habit Tracker",
    image: projectHabitTracker,
    category: "Apps",
    description: `A productivity app to help users build and maintain positive habits. Features include progress tracking, daily goals, and streaks to facilitate consistency. Designed to promote personal growth through visual feedback and routine management.`,
    demoLink: "https://github.com/Mahalakshmi1394/Habit-tracker-",
    stacks: [
      {
        name: "React",
        logo: react,
      },
    ],
  },
  {
    title: "Bill Splitup",
    image: projectBillsplit,
    category: "Web",
    description: `A smart bill-splitting application that simplifies expense sharing among groups. Its formatting logic ensures fair distribution of costs for dining, travel, and shared households. Users can easily track who owes what, preventing financial misunderstandings.`,
    demoLink: "https://github.com/Mahalakshmi1394/Bill_splitup",
    stacks: [
      {
        name: "React",
        logo: react,
      },
    ],
  },
];

export const skills = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
        logo: figma,
      },
      {
        skill: "Sketch",
        level: "Intermediate",
        logo: sketch,
      },
      {
        skill: "XD",
        level: "Intermediate",
        logo: xd,
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "React Native",
        level: "Experienced",
        logo: reactnative,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "roshithmaha@gmail.com",
    link: "mailto:roshithmaha@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "WhatsApp",
    value: "+91 9384601134",
    link: "https://api.whatsapp.com/send?phone=+9384601134",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    link: "",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/Mahalakshmi1394/",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "www.linkedin.com/in/maha-lakshmi-216492261",
  }
];




// Place this in your main JS file or inside a <script> tag

