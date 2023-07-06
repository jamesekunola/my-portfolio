const projects = [
  {
    img: "/assets/spacer.jpg",
    web: "https://space-tourist-travel.netlify.app/",
    name: "Space tourism multi-page website",
    tools: ["css", "react"],
    desc: `The Space Tourism Multi-Page Website, developed with the help of React Router, presents a collection of pages exclusively designed for space tourism experiences.

By leveraging React Router, this website provides users with seamless navigation capabilities, allowing them to effortlessly explore a range of captivating destinations, packages, and experiences within the realm of space tourism. With dynamic content rendering based on selected routes, users enjoy a smooth and uninterrupted browsing experience throughout their exploration of the site.`,
    "source code": "https://github.com/jamesekunola/space-tourist-website",
  },

  {
    img: "/assets/url.jpg",
    web: "https://url-linkshortner.netlify.app/index.html",
    name: "URL shortening API landing page",
    tools: ["html", "scss", "js", "api"],
    desc: ` The URL Shortening app is a user-facing application that provides a seamless and intuitive interface for users to shorten long URLs. With this app, users can input their lengthy URLs into a designated field and receive a shortened version as the output. The frontend app leverages technologies such as HTML, CSS, and JavaScript to create an interactive and responsive user interface.
`,
    "source code": "https://github.com/jamesekunola/space-tourist-website",
  },

  {
    img: "/assets/ip-track.jpg",
    web: "https://ip-add-finder.netlify.app/",
    name: "IP Address Tracker",
    tools: ["html", "scss", "js", "api"],
    desc: `The IP address tracker app is a useful tool that allows users to track and obtain information about any given IP address. With this app, users can input an IP address and retrieve details such as the geographical location, internet service provider (ISP), time zone, and other relevant information associated with that IP address. The app utilizes APIs and database resources to accurately fetch and display the desired information in a user-friendly manner`,
    "source code": "https://github.com/jamesekunola/ip-address-tracker-master",
  },

  {
    img: "/assets/interative.jpg",
    web: `https://interactivecommentssection.netlify.app/`,
    name: "Interactive comments section",
    tools: ["css", " react"],
    desc: `The Interactive Comment Section app was built using React and implemented the use of the Context API. This powerful combination allows for efficient state management and seamless data sharing throughout the app. With React's component-based architecture and the Context API's ability to provide centralized data access, the app ensures smooth interactions and real-time updates within the comment section. Users can perform actions like deleting, replying, creating, and editing comments with ease, thanks to the robust foundation provided by React and the Context API.`,
    "source code": "https://github.com/jamesekunola/quiz-app",
  },
  {
    img: "/assets/work_rest_country_api.jpg",
    web: "https://dainty-bombolone-d7d98f.netlify.app/",
    name: "REST Countries API with color theme switcher",
    tools: ["css", "react", "api"],
    desc: ` 
The REST Countries API with Color Theme Switcher is an advanced web application built using React and React Router. It combines the power of the REST Countries API, a color theme switcher, and React Router to create a seamless and engaging user experience.
With React Router, the app enables navigation between different pages. When a user selects a country card, the app retrieves the selected card's ID using React Router's useParams hook. It then dynamically renders the details of the selected country on a separate page.`,
    "source code":
      "https://github.com/jamesekunola/rest-countries-api-with-color-theme-switcher-master-react",
  },
  {
    img: "/assets/easy.jpg",
    web: "https://famous-pony-b8a4b3.netlify.app/",
    name: "The EasyBank Landing Page",
    tools: ["css", "react"],
    desc: ` The EasyBank Landing Page is a modern and visually appealing website designed to showcase the features and offerings of the EasyBank financial institution. The landing page serves as an entry point for users, providing them with an overview of the bank's services and encouraging them to explore further.`,
    "source code": "https://github.com/jamesekunola/quiz-app",
  },
  {
    img: "/assets/multi-step.jpg",
    web: "https://willowy-moonbeam-c60a39.netlify.app/",
    name: "Multi-step form",
    tools: ["react", "redux"],
    desc: `I am currently working on a Multi-step Form project that leverages Redux for state management. With Redux, the form's state is effectively managed and synchronized throughout the different steps. This allows users to navigate back to previous steps, make necessary corrections, and observe the real-time updates of their changes. By utilizing Redux, the form maintains a consistent and centralized data flow, enhancing the user experience and ensuring seamless interaction within the form.`,
    "source code": "https://github.com/jamesekunola/multi-step-form",
  },
];
const projectEl = document.querySelector(".projects-page-center");
const sectionEl = document.querySelectorAll(".revel");

// function
const displayMobileNav = () => {
  const hambugerBtn = document.querySelector(".hambuger-menu");
  const closeNavBtn = document.querySelector(".close-nav__btn");
  const asideEl = document.querySelector("aside");
  // show mobile nav
  hambugerBtn.addEventListener("click", () => {
    asideEl.classList.add("show");
  });

  // hide mobile nav
  closeNavBtn.addEventListener("click", () => {
    asideEl.classList.remove("show");
  });
};

const renderProjects = () => {
  if (projectEl) {
    projectEl.innerHTML = projects
      .map((items) => {
        return `<article class="single-project">
    <div class="project-container">
        <img src=${items.img} alt="project" />
        <a href= ${items.web} target="_blank" class="project-icon">
            <i class="fas fa-home"></i>
        </a>
    </div>
    <div class="project-details">
        <h4>${items.name}</h4>
       
        <ul class="tools">
        ${items.tools
          .map((tool) => {
            return `<li class=${tool}>${tool}</li>`;
          })
          .join("")}
              
          </ul>

        <p>
           ${items.desc}
        </p>
        <div class="project-footer">
            <span>
                <i class="fab fa-github"></i>
            </span>
            <a href=${items["source code"]}>source code</a>
        </div>
    </div>
</article>`;
      })
      .join("");
  }
};

const fixedNavbarOnScroll = () => {
  const nav = document.querySelector(".nav-container");
  const navHeight = nav.getBoundingClientRect().height;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (scrollTop > navHeight - 20) {
      nav.classList.add("fixed_nav");
    } else {
      nav.classList.remove("fixed_nav");
    }
  });
};

const revelElOnScroll = () => {
  window.addEventListener("scroll", () => {
    const pageHeight = window.innerHeight;
    const eleTop = 150;
    sectionEl.forEach((ele) => {
      const eleTopPosition = ele.getBoundingClientRect().top;
      if (eleTopPosition < pageHeight - eleTop) {
        ele.classList.add("active");
      } else {
        ele.classList.remove("active");
      }

      // console.log(eleTopPosition, pageHeight, pageHeight - 150);
    });
  });
};

const setFooterDate = () => {
  const dateEl = document.querySelector(".date");
  const date = new Date().getFullYear();

  dateEl.textContent = date;
};

// event listener
window.addEventListener("DOMContentLoaded", () => {
  setFooterDate();
  displayMobileNav();
  fixedNavbarOnScroll();
  renderProjects();
  revelElOnScroll();
});
