import React from "react";
import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
 
  {
    url: "/blog",
    text: "My Work",
  },
  {
    url: "/contact",
    text: "Contact",
  },

 
 
 
]
export const home = [
  {
    text: "HELLO I'M",
    name: "ASHEN PRAGEETH",
    post: "WEB/APP DESIGNER",
    design: "UI / UX DESIGNER",
    desc: "Passionate about technology and its endless possibilities, I am eager to learn and grow in the field of software development. With a strong foundation in programming languages and problem-solving skills, I enjoy tackling challenges and crafting efficient solutions. I believe in continuous self-improvement and strive to stay updated with the latest industry trends and technologies. I am a dedicated team player, always ready to collaborate and contribute effectively to achieve project goals. Through my portfolio, I aim to showcase my projects and experiences, highlighting my enthusiasm for software engineering. Let's connect and explore the world of software together!",
  },
]



export const about = [
  {
    desc: "Hello, I'm Ashen, a pianist, musician, and creative individual with a passion for artistic expression. Through the enchanting melodies and harmonies I create, I strive to evoke emotions and transport listeners to a world of musical enchantment. With a deep understanding of music theory and years of practice, I bring soulful performances and unforgettable experiences to audiences.",
    desc1: "In addition to my musical pursuits, I am a versatile artist with skills in videography, graphic design, and editing. Leveraging my expertise in visual storytelling, I capture captivating moments and produce compelling videos that resonate with viewers. As a skilled graphic designer, I bring ideas to life through stunning visuals that leave a lasting impression. Furthermore, as a software engineering student, I am constantly expanding my technical knowledge and skills to develop innovative solutions. With my diverse background and unwavering dedication to excellence, I strive to create impactful and immersive experiences across various creative domains.",
    cover: "./images/man.png",
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Web Design",
    desc: " Creating visually appealing and user-friendly website interfaces that captivate and engage audiences.",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Ui/Ux Design",
    desc: "Crafting intuitive user experiences and designing beautiful interfaces to enhance usability and satisfaction.",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Web Development",
    desc: "Building robust and responsive websites with cutting-edge technologies to meet your specific business needs.",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Graphic Design/Videography",
    desc: "Combining the power of visual storytelling, I offer a comprehensive range of services, including creating eye-catching graphics and producing captivating videos that convey messages effectively and leave a lasting impression.",
  },
  {
    id: 5,
    icon: <Code />,
    title: "App Development",
    desc: " Developing innovative and scalable mobile applications that deliver seamless experiences and drive business growth.",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: " Providing exceptional customer service and technical assistance to ensure a smooth and enjoyable experience for clients.",
  },
]

export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.png",
    name: "Designed and developed a comprehensive watch management system for a watch shop, enabling efficient inventory tracking, sales management, and seamless customer service.",
    title: "Watch Store Management System",
    href: "https://github.com/Zeeker13/OOP-Still-noobs/tree/main/Timeticker"
  },
  {
    id: 2,
    cover: "../images/port/port2.PNG",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover: "../images/port/port3.PNG",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: "../images/port/port4.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: "../images/port/port5.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: "../images/port/port6.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
]


export const blog = [
  {
    id: 1,
    title: "Melodic Journey on the Piano",
    date: "Clickhere",
    desc: "Indulge in the enchanting melodies as I bring life to the keys of the piano. Explore my musical journey and experience the beauty of music through my heartfelt performances. Watch my piano covers and original compositions on YouTube.",
    cover: "./images/blog/b1.png",
    href:"https://www.youtube.com/@ashen2178"
  },
  {
    id: 2,
    title: "Creative Collaborations in Visual Storytelling",
    date: "Clickhere",
    desc: " I collaborate with talented individuals to create captivating videos. From cinematic montages to promotional content, explore the art of storytelling through the lens of a videographer and editor.",
    cover: "./images/blog/b2.png",
    href:"https://www.youtube.com/watch?v=IXup40KMj2I"

  },
  {
    id: 3,
    title: "Fiverr Freelancer: Empowering Creative Collaboration",
    date: "Clickhere",
   
    desc: "Join my Fiverr journey, where I collaborate with clients worldwide, deliver exceptional results, and unlock creative possibilities.",
    cover: "./images/blog/b3.png",
    href:"https://www.fiverr.com/enperia?public_mode=true"
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "222/1 Siriniwasa,Rannungala,Wasskaduwa",
  
  },
  {
    icon: <PhoneIphone />,
    text1: "+9476 6565899",
    
  },
  {
    icon: <EmailOutlined />,
    text1: "ashenprageeth1@gmail.com",
    
  },
]
export const social = [
  {
    icon: <Facebook />,
    link: "https://www.facebook.com",
  },
  {
    icon: <Twitter />,
    link: "https://twitter.com/AshenPrageeth13",
  },
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/ashen.01/",
  },
  {
    icon: <YouTube />,
    link: "https://www.youtube.com/@ashen2178",
  },
];