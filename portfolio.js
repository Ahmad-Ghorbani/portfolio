import emoji from "react-easy-emoji";

export const greetings = {
  name: "Ahmad Ghorbani",
  title: "Hi all, I'm Ahmad",
  description:
    "A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
  resumeLink:
    "https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:d184ac90-7d76-4dac-955f-47dce2d5b8cf",
};

export const openSource = {
  githubUserName: "Ahmad-Ghorbani",
};

export const contact = {};

export const socialLinks = {
  //   facebook: "https://www.facebook.com/1hanzla100",
  //   instagram: "https://www.instagram.com/1hanzla100",
  //   twitter: "https://twitter.com/1hanzla100",
  github: "https://github.com/Ahmad-Ghorbani",
  linkedin: "https://www.linkedin.com/in/Ahmad-Ghorbani/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "I WANT TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("✅ I code elegantly and professionally"),
    emoji("✅ I do whatever it takes to get the job done more than expected."),
    emoji("✅ I do whatever it takes to get the job done more than expected."),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    // {
    //   skillName: "flutter",
    //   fontAwesomeClassname: "logos:flutter",
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "vscode-icons:file-type-swift",
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "logos:aws",
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "logos:firebase",
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "logos:python",
    // },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "logos:docker-icon",
    // },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "60",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName: "Full Stack Software Developer, Udemy && CodeWithMosh",
    subHeader: "",
    duration: "February 2018 — Present",
    desc: "Attending both front-end and back-end courses and building scalable and maintainable full-stack projects.",
    // descBullets: [""],
  },
  {
    schoolName: "Shahid Beheshti University",
    subHeader: "Master of Science in Photonics",
    duration: "September 2016 — September 2018",
    desc: "Participated in the research of Signal Processing and published 3 papers.",
    // descBullets: [
    //   "Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    schoolName: "Lorestan University",
    subHeader: "Bachelor’s in Electronics Engineering",
    duration: "September 2008 — September 2012",
    desc: "Ranked top 10% in the program. Took courses about Software Engineering, ...",
    // descBullets: ["Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit"],
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelancer",
    companylogo: "/img/icons/common/google.svg",
    date: "December 2019 — October 2021",
    desc: "Building an online platform for monitoring and controlling a greenhouse performance using these technologies: HTML5, CSS3, JavaScript, React for front-end app and using Node.js, Express and PostgreSQL for back-end",
  },
  {
    role: "Front-End Developer",
    company: "BACC Co",
    companylogo: "/img/icons/common/github.svg",
    date: "April 2018 — July 2019",
    desc: "Working on an e-commerce platform as a front-end developer using the following tech stack: HTML5, CSS3, JavaScript, React, Redux.",
  },
  // {
  //   role: "Software Engineer Intern",
  //   company: "Airbnb",
  //   companylogo: "/img/icons/common/airbnbLogo.png",
  //   date: "Jan 2015 – Sep 2015",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  // },
];

export const projects = [
  {
    name: "Ecommerce Website",
    desc: "An ecommerce website with all features of a real one!",
    link: "https://ahmad-shop.herokuapp.com/",
    github: "https://github.com/Ahmad-Ghorbani/ecommerce",
  },
  {
    name: "Face Detection App",
    desc: "Enter an image URL and this website detects and shows the faces in it.",
    github: "https://github.com/Ahmad-Ghorbani/facedetection-front",
    link: "https://ahmad-ghorbani.github.io/facedetection-front/",
  },
  {
    name: "Contacts Search App",
    desc: "Type a word, and this app searches through the contacts and finds the ones that match the word.",
    github: "https://github.com/Ahmad-Ghorbani/robofriends",
    link: "https://ahmad-ghorbani.github.io/robofriends/",
  },
];
