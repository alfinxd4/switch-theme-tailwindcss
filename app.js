const btnSwitch = document.querySelector('#btn-switch');

// theme var 
const userTheme = localStorage.getItem('theme');
// check based on dark theme
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

//check initial theme 
const checkTheme = () => {
    //dark mode
    if (userTheme == "dark"  ) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme','dark');
        return "dark";
    }
    // light mode
    else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme','light');
        return "light";
    }
}

// switchTheme 
const switchTheme = () =>{ 
    // dark - light
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
          localStorage.setItem('theme','light');
         return "light"
    } 
    // light - dark
    else {
       document.documentElement.classList.add('dark');
       localStorage.setItem('theme','dark');
        return "dark";
    }
}


btnSwitch.addEventListener('click',()=>{
    switchTheme();
})

// 
checkTheme();