const btnSwitch = document.querySelector("#btn-switch");
// theme var
const userTheme = localStorage.getItem("theme");
// check based on dark theme
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

// dark mode
const darkMode = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
}

// light mode
const lightMode = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
}

//check initial theme
const checkTheme = () => {
  if (userTheme == null) {
    if (systemTheme == true) {
      darkMode();
    } else {
       lightMode();
    }
  } else {
    //dark mode
    if (userTheme == "dark" || switchTheme == "dark") {
        darkMode();
    } else {
    //   light mode
      lightMode();
    }
  }
};

// switch theme
const switchTheme = () => {
  // dark - light
  if (document.documentElement.classList.contains("dark")) {
   lightMode();
  }
  // light - dark
  else {
    darkMode();
  }
};

btnSwitch.addEventListener("click", () => {
  switchTheme();
});

// check initial theme
checkTheme();
