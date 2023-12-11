import { getData } from './courses.js';

let dark = false;
let favouriteDisplay = false;

const setMode = (dark) => {
    const root_theme = document.querySelector(':root');
    if (dark) {
        root_theme.style.setProperty('--bg_default', '#1A1A1A');
        root_theme.style.setProperty('--bg_body', '#282828');
        root_theme.style.setProperty('--lines-color', '#000000');
        root_theme.style.setProperty('--body-text', '#EDEDED');
    }
    else {
        root_theme.style.setProperty('--bg_default', '#FFFFFF');
        root_theme.style.setProperty('--bg_body', '#F0F9FF');
        root_theme.style.setProperty('--lines-color', '#DDDDDD');
        root_theme.style.setProperty('--body-text', '#333333');
    }
}
const changeMode = () => {
    const darkModeButton = document.getElementById('dark-mode')
    const dark = JSON.parse(localStorage.getItem('darkMode'));
    if (!dark) {
        localStorage.setItem('darkMode', 1);
        darkModeButton.innerHTML = `<i class="fa-regular fa-moon"></i> <span>Light Mode</span>`;
    }
    else {
        localStorage.setItem('darkMode', 0);
        darkModeButton.innerHTML = `<i class="fa-regular fa-moon"></i> <span>Dark Mode</span>`;
    }
    setMode(!dark);
}
const showMyFavourite = async () => {
    const container = document.querySelector('.favourite-list');
    if (!favouriteDisplay) {
        container.innerHTML = '';
        let favoriteList = await getData('https://liansaed.github.io/Layan-Saed-project1/javaScript/favoriteData.json');
        favoriteList.forEach(function (course, idx) {
            // Construct card content
            const content = `
                <div id="favourite-${idx}" class="favourite-card" >
                    <div class="favourite-img" id="favourite-img-${idx}"></div>
                    <div class="favourite-info">
                        <h1>${course.title}</h1>
                    </div>
                </div>
                `;
            container.innerHTML += content;
            document.getElementById(`favourite-img-${idx}`).style.backgroundImage = "url(" + course.ImagePath + ")"
        })
        document.querySelector('.favourite-display').style.display = 'block';
        favouriteDisplay = true;
    }
    else {
        document.querySelector('.favourite-display').style.display = 'none';
        favouriteDisplay = false;
    }
}

window.showMyFavourite = showMyFavourite;
window.changeMode = changeMode;
const darkMode = JSON.parse(localStorage.getItem('darkMode'));
console.log('Retrieved object from local storage:', darkMode);
console.log("darkMode= " + darkMode)
setMode(darkMode);