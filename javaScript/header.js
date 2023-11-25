let dark = false;
let favouriteDisplay = false;
let favoriteList = [...fav];

const darkMode = () => {
    const root_theme = document.querySelector(':root');
    const darkModeButton = document.getElementById('dark-mode')
    if (!dark) {
        root_theme.style.setProperty('--bg_default', '#1A1A1A');
        root_theme.style.setProperty('--bg_body', '#282828');
        root_theme.style.setProperty('--lines-color', '#000000');
        root_theme.style.setProperty('--body-text', '#EDEDED');
        darkModeButton.innerHTML = `<i class="fa-regular fa-moon"></i> <span>Light Mode</span>`;
        dark = true;
    }
    else {
        root_theme.style.setProperty('--bg_default', '#FFFFFF');
        root_theme.style.setProperty('--bg_body', '#F0F9FF');
        root_theme.style.setProperty('--lines-color', '#DDDDDD');
        root_theme.style.setProperty('--body-text', '#333333');
        darkModeButton.innerHTML = `<i class="fa-regular fa-moon"></i> <span>Dark Mode</span>`;
        dark = false;
    }
}
const showMyFavourite = () => {
    console.log("hello")
    const container = document.querySelector('.favourite-list');
    if (!favouriteDisplay) {
        favoriteList.forEach(function (course, idx) {
            console.log(course)
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