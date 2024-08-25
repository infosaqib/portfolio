//! Root Varibales
// Root Variables
const root = document.documentElement;

const defaultValues = {
  "--dark-clr": "#000",
  "--light-clr": "#fff",
  "--dark-grey": "#343434",
  "--Xlight-grey": "hsl(0, 0%, 97%)",
};

const alternateValues = {
  "--dark-clr": "#fff",
  "--light-clr": "#000",
  "--dark-grey": "hsl(0, 0%, 97%)",
  "--Xlight-grey": "#3d3d3d",
};

let isDefault = true;

// Function to apply the values based on the current mode
function applyValues(values) {
  for (const [variable, value] of Object.entries(values)) {
    root.style.setProperty(variable, value);
  }
}

// Function to toggle the theme and store the user's preference
function toggleRootVariables() {
  isDefault = !isDefault;
  const newValues = isDefault ? defaultValues : alternateValues;

  applyValues(newValues);

  // Store the current theme in localStorage
  localStorage.setItem("theme", isDefault ? "default" : "alternate");
}

// Check for browser's dark mode preference and apply the appropriate theme
function applyInitialTheme() {
  const storedTheme = localStorage.getItem("theme");
  
  // Apply stored theme if exists
  if (storedTheme) {
    isDefault = storedTheme === "default";
  } else {
    // Apply browser's dark mode preference if no stored theme
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    isDefault = !prefersDarkScheme;
  }

  const initialValues = isDefault ? defaultValues : alternateValues;
  applyValues(initialValues);
}

// Apply the initial theme on page load
applyInitialTheme();


//! Header

//? Sidebar
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBar = document.getElementById("menubar");

function toggleMenu() {
  menuBar.classList.toggle("is-active");
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}

function hideMenu() {
  menuBar.classList.remove("is-active");
  overlay.classList.remove("active");
  sidebar.classList.remove("active");
}

//? Dark - Light Mode
let modeValue = 1;
const mode = document.querySelector(".mode");

mode.addEventListener("click", () => {
  toggleRootVariables();

  const anime = document.getElementById("videoAnime");

  if (modeValue === 1) {
    anime.src = "assets/videos/gold_black.mp4";
    mode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
`;
    modeValue = 0;
  } else {
    anime.src = "assets/videos/silver_white.mp4";
    mode.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
      `;
    modeValue = 1;
  }
});

//! Portfolio generator function

const portfolioGrid = document.querySelector(".portfolio_collection");
const generatePortCards = () => {
  return (portfolioGrid.innerHTML = portfolioCards
    .map((x) => {
      let { poster, image, tech, title, desc } = x;
      return `
    <div class="swiper-slide port_card">
                <div class="port_card_img" style="background: url(${poster}) no-repeat top;background-size: cover;">
         <img src="${image}" loading="lazy">
                </div>
                <div class="port_card_list">
                    <ul>${tech
                      .map((x) => {
                        return `<li>${x}</li>`;
                      })
                      .join("")}</ul>
                </div>
                <div class="port_card_info">
                    <h2>${title}</h2>
                    <p>${desc}</p>
                </div>
                <div class="port_card_buttons">
                    <button >Live Preview</button>
                   <p>
  <a href="#" title="Love it" class="btn btn-counter" data-count="0"><span>&#x2764;</span></a>
</p>
                </div>
            </div>
    `;
    })
    .join(""));
};
generatePortCards();

//! Testimonials generator function

let testimonialGrid = document.querySelector(".testimonials_collection");

let generateTesti = () => {
  return (testimonialGrid.innerHTML = testimonials
    .map((x) => {
      let { name, poster, image, desc, role } = x;
      return `
<div class="swiper-slide testimonials_card">
<span><i class="ri-double-quotes-l"></i></span>
<p>
${desc}
</p>
<div class ="testimonials_card_img" style="background: url(${poster}) no-repeat top;background-size: cover;">
<img  src="${image}" alt="${name}" loading = "lazy" />
</div>
<h5>${name}</h5>
<h6>${role}</h6>
</div>`;
    })
    .join(""));
};

generateTesti();

//? Swiper JS code

//! ------------ Tesimonials -----------------
let swiper1 = new Swiper(".testimonials_section_container", {
  speed: 800,
  spaceBetween: 130,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//! ------------ Portfolio -----------------

let swiper2 = new Swiper(".portfolio_section_container", {
  speed: 800,
  spaceBetween: 25,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 1,
    },
  },
});

//! Images Optimization
document.addEventListener('DOMContentLoaded', ()=>{

  //?Portfolio Section
 let portDivs = document.querySelectorAll(".port_card_img");
  

portDivs.forEach((div) => {
  const img = div.querySelector("img");

  function loaded() {
    //show image
    div.classList.add("loaded");
  }

  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }
});


  //?Testimonials Section
  let testDivs = document.querySelectorAll(".testimonials_card_img");
  

  testDivs.forEach((div) => {
    const img = div.querySelector("img");
  
    function loaded() {
      //show image
      div.classList.add("loaded");
    }
  
    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }
  });


})
