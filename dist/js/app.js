const btnSwitch = document.querySelector('#btn-switch');
// theme var 
const userTheme = localStorage.getItem('theme');
// check based on dark theme
const systemTheme  = window.matchMedia("(prefers-color-scheme:dark)").matches;

 //check initial theme 
const checkTheme = () => {
    //dark mode
    if (userTheme == "dark" || systemTheme == true)  {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme','dark');
    } else {
        localStorage.setItem('theme','light');
        if ( document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme','dark');
        }
    }
}

// switch theme
const switchTheme = () =>{
    // dark - light 
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme','light');
    }
    // light - dark 
    else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme','dark');
    } 
}
  
btnSwitch.addEventListener('click',()=>{
    switchTheme();
})

// check initial theme
checkTheme();