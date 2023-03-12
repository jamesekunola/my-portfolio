const projects = [
  {
    img: "/assets/work_rest_country_api.jpg",
    web: false,
    name: "Country Api",
    desc: `The rest country app is a valuable resource for anyone seeking to learn more about countries and
their unique characteristics. Its user-friendly interface and powerful search and filtering
capabilities make it a great tool for educators, researchers, and anyone with an interest in global
affairs.`,
    "source code":
      "https://github.com/jamesekunola/rest-countries-api-with-color-theme-switcher-master",
  },

  {
    img: "/assets/quiz_app.png",
    web: false,
    name: "Quiz App",
    desc: ` The app works by presenting the user with a series of questions, retrieved from an API, along with
    multiple choice answers. The user can select an answer for each question, and the app will keep
    track of their score as they progress through the quiz.`,
    "source code": "https://github.com/jamesekunola/quiz-app",
  },

  {
    img: "/assets/todo.jpg",
    web: false,
    name: "Todo App",
    desc: `  A classic todo app with a few twists! This app includes a dark/light theme toggle Whether you're a
    busy professional or just looking to stay organized in your personal life, a todo app can be a
    valuable tool for achieving your goals and increasing your productivity.`,
    "source code": "https://github.com/jamesekunola/todo-app-main",
  },

  {
    img: "/assets/ip-track.jpg",
    web: false,
    name: "ip address web tracker",
    desc: ` The app works by presenting the user with a series of questions, retrieved from an API, along with
    multiple choice answers. The user can select an answer for each question, and the app will keep
    track of their score as they progress through the quiz.`,
    "source code": "https://github.com/jamesekunola/quiz-app",
  },
  {
    img: "/assets/int-rating.jpg",
    web: false,
    name: "interactive rating app",
    desc: ` The app works by presenting the user with a series of questions, retrieved from an API, along with
    multiple choice answers. The user can select an answer for each question, and the app will keep
    track of their score as they progress through the quiz.`,
    "source code": "https://github.com/jamesekunola/quiz-app",
  },
  {
    img: "/assets/advice-generator.jpg",
    web: false,
    name: "Advice generating app",
    desc: ` The app works by presenting the user with a series of questions, retrieved from an API, along with
    multiple choice answers. The user can select an answer for each question, and the app will keep
    track of their score as they progress through the quiz.`,
    "source code": "https://github.com/jamesekunola/quiz-app",
  },
  {
    img: "/assets/ecom.jpg",
    web: false,
    name: "ecommerce product page ",
    desc: ` The app works by presenting the user with a series of questions, retrieved from an API, along with
    multiple choice answers. The user can select an answer for each question, and the app will keep
    track of their score as they progress through the quiz.`,
    "source code": "https://github.com/jamesekunola/quiz-app",
  },
  {
    img: "/assets/url.jpg",
    web: false,
    name: "URL links shortner landing page",
    desc: ` The app works by presenting the user with a series of questions, retrieved from an API, along with
    multiple choice answers. The user can select an answer for each question, and the app will keep
    track of their score as they progress through the quiz.`,
    "source code": "https://github.com/jamesekunola/quiz-app",
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
        <a href="#" class="project-icon">
            <i class="fas fa-home"></i>
        </a>
    </div>
    <div class="project-details">
        <h4>${items.name}</h4>
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

      console.log(eleTopPosition, pageHeight, pageHeight - 150);
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
