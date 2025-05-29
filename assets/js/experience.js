AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Mechanical Engineer Intern",
    cardImage: "assets/images/experience-page/asml.jpg",
    place: "ASML",
    time: "(May, 2024 - Aug 2024)",
    desp: "<li>Designed mechanical fixtures using sheet metal design in NX12 in order to implement a heating stage in a Modular Vacuum chamber.</li> <li>Developed, performed calculations, and implemented a component-level test bench to test for adhesive delamination in the droplet generator.</li> <li> Prototyped and created sheet metal and plastic parts to integrate different electrical modules into test chambers and improve reliability testing.</li><li> Managed 4 different projects while collaborating with mechanical design and reliability engineers, vendors, and manufacturing </li>",
  },
  {
    title: "Product Design Engineer Intern",
    cardImage: "assets/images/experience-page/amazonn.jpg",
    place: "Amazon Lab 126",
    time: "(May 2023 - Aug, 2023)",
    desp: "<li>Designed and prototyped a universal debug fixture for devices using CREO, incorporating pogo pins, PCBA, FPC flex cable, and springs</li> <li>  Created plastic and sheet metal parts to house electrical assemblies</li> <li> Collaborated with tooling/mold engineers and contract manufacturers to ensure proper molding of plastic parts and seamless UDF assembly</li><li>  Performed FEA contact analysis in CREO Simulate for removable snaps, optimizing cantilever length, lead in/out angle, and width of snaps </li><li> Conducted rapid 3-D prototyping to ensure feasibility, user-friendliness, and proper functionality of components </li> ",
  },
  {
    title: "Relability Engineer Intern ",
    cardImage: "assets/images/experience-page/amazonn.jpg",
    place: "Amazon Lab 126",
    time: "(May, 2022 - May, 2022)",
    desp: "<li>  Researched and addressed in-field issues, collaborated with failure analysis, thermal engineers, and technicians to develop innovative solutions </li><li> Designed, prototyped, and created drawings for a test rig, drawing inspiration from various literature - in CREO.</li><li> Developed component-level test and utilized HALT chamber for thermal aging to evaluate the thermal stability / leaching of different materials.</li><li> Revised product level validation test to match use case environment using Arrhenius model and customer data.</li><li>  Researched into different absorbent materials and glass/ceramics for test rig, ensuring test accuracy and performance.</li>",
  },
   {
    title: "Mechanical Engineer Intern",
    cardImage: "assets/images/experience-page/siemens.png",
    place: "Siemens Healthineers",
    time: "(May, 2021 - Jan, 2022)",
    desp: "<li>Conducted tolerance stack-up analysis (worst case) to ensure allowable misalignment of the belt drive in the Patient Handler System (PHS)</li><li>  Assisted in prototyping and designing sheet metal parts in Siemens NX 12 to improve safety/patient experience</li> <li>  Assisted development engineers in building and testing the Patient Handler System through life cycle, thermal imaging, and acoustic tests.</li> ",
  },
   {
    title: "Mechanical Design Engineer Intern",
    cardImage: "assets/images/experience-page/bosch-logo.png",
    place: "Bosch Home Appliances",
    time: "(Aug, 2021 - Jan, 2021)",
    desp: "<li> Developed a Python script and GUI to interface with Home Connect API Simulators, enabling settings adjustments for refrigerators </li> <li> Designed parts for refrigerator assemblies and drafted new refrigerator assemblies in NX 12 and Teamcenter PDM </li><li>   Designed different parts using principles of plastic part design in NX 12 and used 3-D printing to rapidly prototype parts </li><li>  Assisted quality engineers in developing a data analytical software program in Excel to reduce time sorting through failure symptom data and filter necessary information </li> ",
  },
 {
    title: "Mechanical Design Engineer Intern",
    cardImage: "assets/images/experience-page/bosch-logo.png",
    place: "Bosch Home Appliances",
    time: "(Aug, 2021 - Jan, 2021)",
    desp: "<li> Developed a Python script and GUI to interface with Home Connect API Simulators, enabling settings adjustments for refrigerators </li> <li> Designed parts for refrigerator assemblies and drafted new refrigerator assemblies in NX 12 and Teamcenter PDM </li><li>   Designed different parts using principles of plastic part design in NX 12 and used 3-D printing to rapidly prototype parts </li><li>  Assisted quality engineers in developing a data analytical software program in Excel to reduce time sorting through failure symptom data and filter necessary information </li> ",
  }, 
  {
    title: "Undergradute Research | Additive Manufacturing",
    cardImage: "assets/images/experience-page/siemens.png",
    place: "University of Tennessee Knoxville ",
    time: "(May, 2024 - Aug 2024)",
    desp: "<li>Designed mechanical fixtures using sheet metal design in NX12 in order to implement a heating stage in a Modular Vacuum chamber.</li> <li>Developed, performed calculations, and implemented a component-level test bench to test for adhesive delamination in the droplet generator.</li> <li> Prototyped and created sheet metal and plastic parts to integrate different electrical modules into test chambers and improve reliability testing.</li><li> Managed 4 different projects while collaborating with mechanical design and reliability engineers, vendors, and manufacturing </li>",
  },
  {
    title: "Graduate Research | Robotics Lab",
    cardImage: "assets/images/experience-page/siemens.png",
    place: "University of Tennessee Knoxville",
    time: "(May 2023 - Aug, 2023)",
    desp: "<li>Designed and prototyped a universal debug fixture for devices using CREO, incorporating pogo pins, PCBA, FPC flex cable, and springs</li> <li>  Created plastic and sheet metal parts to house electrical assemblies</li> <li> Collaborated with tooling/mold engineers and contract manufacturers to ensure proper molding of plastic parts and seamless UDF assembly</li><li>  Performed FEA contact analysis in CREO Simulate for removable snaps, optimizing cantilever length, lead in/out angle, and width of snaps </li><li> Conducted rapid 3-D prototyping to ensure feasibility, user-friendliness, and proper functionality of components </li> ",
  },
];
const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
//   {
//     title: "StudentCode-in 2020",
//     cardImage: "assets/images/experience-page/2.jpg",
//     description:
//       "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
//   },
 
// ];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `        
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
      
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

// const hackathonsection = document.querySelector(".hackathon-section");
// const mentor = [
//   {
//     title: "The Uplift Project",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/uplift.png",
//     desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
//     href: "https://uplift.girlscript.tech/",
//   },
//   {
//     title: "ULHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/ulhacks.png",
//     desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
//     href: "https://ulhacks.com/",
//   },
//   {
//     title: "WaffleHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/wafflehacks.png",
//     desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
//     href: "https://wafflehacks.org/",
//   },
//   {
//     title: "Elevate Tech",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/elevate.png",
//     desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
//     href: "https://elevatetech.codes/",
//   },
//   {
//     title: "PitchTeen",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/pitchteen.png",
//     desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
//     href: "https://www.linkedin.com/company/pitchteen/about/",
//   },
//   {
//     title: "Hack-A-Solution",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/hackasolution.png",
//     desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
//     href: "https://hackasolution.devpost.com/",
//   },
//   {
//     title: "UniGlobe Hacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/uniglobe.png",
//     desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
//     href: "https://uniglobe-hacks.devpost.com/",
//   },
//   {
//     title: "AtlasHacks",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/atlas.png",
//     desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
//     href: "https://atlashacks2.devpost.com/",
//   },
//   {
//     title: "NeoHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/neo.png",
//     desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
//     href: "https://neohacks.org/",
//   },
//   {
//     title: "Mission Inspired",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/mission.png",
//     desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
//     href: "https://www.missioninspired.org/hackathon",
//   },
//   {
//     title: "Hack3",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/hack3.png",
//     desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
//     href: "https://hack3.co/",
//   },
//   {
//     title: "JITHack",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/jithack.png",
//     desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
//     href: "https://jithack.netlify.app/",
//   },
//   {
//     title: "Recess Hacks",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/recess.png",
//     desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
//     href: "https://recesshacks.com/",
//   },
//   {
//     title: "Citro Tech",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/citro.png",
//     desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
//     href: "https://citro.tech/",
//   },
//   {
//     title: "NHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/nhacks.png",
//     desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
//     href: "https://nhacks-vi.devpost.com/",
//   },
// ];

// const showCards3 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, subtitle, desp, href }) =>
//       (output += `  
//       <div class="blog-slider__item swiper-slide">
//         <div class="blog-slider__img">
//             <img src="${image}" alt="">
//         </div>
//         <div class="blog-slider__content">
//           <div class="blog-slider__title">${title}</div>
//           <span class="blog-slider__code">${subtitle}</span>
//           <div class="blog-slider__text">${desp}</div>
//           <a href="${href}" class="blog-slider__button">Read More</a>   
//         </div>
//       </div>
//       `)
//   );
//   hackathonsection.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards3);
