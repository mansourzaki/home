// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #2c3e50",
  firstName: "Mansour",
  middleName: "",
  lastName: "Alhaddad",
  message: " “𝘔𝘢𝘬𝘦 𝘪𝘵 𝘸𝘰𝘳𝘬, 𝘮𝘢𝘬𝘦 𝘪𝘵 𝘳𝘪𝘨𝘩𝘵, 𝘮𝘢𝘬𝘦 𝘪𝘵 𝘧𝘢𝘴𝘵“",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/mansourzaki",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/mansourzaki",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/mansourzaki/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mansourza/",
    },
    {
      image: "fa-twitter",
      url: "https://x.com/mansssza/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/mansouralhaddad.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mansouralhaddad.jpg"),
  imageSize: 375,
  message:
    "I'm a Flutter developer with over 4 years of experience, specializing in crafting high-performance, user-centric applications. I have a strong track record of solving complex challenges, integrating third-party services, and building seamless UIs. Passionate about continuous learning and innovation, I thrive in dynamic environments and enjoy contributing to impactful projects.",
  resume: "https://drive.google.com/file/d/1gmgTqp-i4yiGijSuyJjtp1jjvTEUfSEL/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "mansourzaki", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

const contributions = {
  show: true,
  heading: "Recent Contributions",
  gitHubUsername: "mansourzaki", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/mansouralhaddad.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/mansouralhaddad.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Dart", value: 95 },
    { name: "Flutter", value: 95 },
    { name: "Swift", value: 75 },
    { name: "Java", value: 80 },
    { name: "Python", value: 90 },
    { name: "Flask", value: 75 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 75 },
    { name: "HTML/CSS", value: 55 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Time Managment", value: 75 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm always open to new opportunities, collaborations, or simply connecting with like-minded professionals. Whether you have a project in mind, need technical expertise, or just want to chat about Flutter development, feel free to reach out. Let's build something amazing together!",
  email: "mansourzaki2000@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/sukuk-capital.png'),
      date: 'November 2022 – Present',
      link: 'https://sukuk.sa/',
    },
    {
      role: 'Flutter Developer',
      companylogo: require('../assets/img/syncme.png'),
      date: 'May 2023 – April 2024',
      link: 'https://syncme.io/',
    },
    {
      role: 'Freelance through Upwork',
      companylogo: require('../assets/img/upwork.png'),
      date: 'August 2022 – November 2024',

    },

  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences,contributions };
