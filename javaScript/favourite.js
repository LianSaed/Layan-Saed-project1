import { getData } from './fetch.js';
let favouriteDisplay = false;
const showMyFavourite = async () => {
    const container = document.querySelector('.favourite-list');
    if (!favouriteDisplay) {
        container.innerHTML = '';
        const favoriteList = JSON.parse(localStorage.getItem('favoriteList'));
        console.log(favoriteList)
        if (favoriteList !== null) {
            favoriteList.forEach(function (course, idx) {
                // Construct card content
                const content = `
                <div id="favourite-${idx}" class="favourite-card" >
                    <div class="favourite-img" id="favourite-img-${idx}"></div>
                    <div class="favourite-info">
                        <h1>${course.topic}</h1>
                    </div>
                </div>
                `;
                container.innerHTML += content;
                document.getElementById(`favourite-img-${idx}`).style.backgroundImage = "url(" + "../logos/" + course.image + ")"
            })
        }
        document.querySelector('.favourite-display').style.display = 'block';
        favouriteDisplay = true;
    }
    else {
        document.querySelector('.favourite-display').style.display = 'none';
        favouriteDisplay = false;
    }
}

const addOrRemoveFromFavourites = async (id) => {
    let favoriteList = JSON.parse(localStorage.getItem('favoriteList'));
    let favoriteItem = checkIfInFavList(id);
    favouriteButtonText(!favoriteItem);
    if (favoriteItem) {
        //remove it from local storage
        favoriteList = favoriteList.filter(obj => obj.id !== id);
        localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    } else {
        const newFavourite = await getData(`https://tap-web-1.herokuapp.com/topics/details/${id}`);
        favoriteList.push(newFavourite);
        // Store the updated JSON string back in local storage
        localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    }
}
export const favouriteButtonText = (isFavorite) => {
    if (isFavorite) {
        //change back to add to fav
        document.querySelector('.favouritesButton').innerHTML = `Remove from favourites <i class="fa-regular fa-heart">`;
    } else {
        //change to remove from fav
        document.querySelector('.favouritesButton').innerHTML = `Add to favourites <i class="fa-regular fa-heart">`;
    }
}
export const checkIfInFavList = (id) => {
    let favoriteList = JSON.parse(localStorage.getItem('favoriteList'));
    let favoriteItem = favoriteList.reduce((accumulator, course) => {
        if (JSON.parse(course.id) === JSON.parse(id)) {
            accumulator = course;
        }
        return accumulator;
    }, null)
    return favoriteItem;
}
const initLocalStorage = () => {
    const favoriteList = JSON.parse(localStorage.getItem('favoriteList'));
    if (favoriteList == null) {
        let arr = [];
        localStorage.setItem('favoriteList', JSON.stringify(arr));
    }
}
window.showMyFavourite = showMyFavourite;
window.addOrRemoveFromFavourites = addOrRemoveFromFavourites;
initLocalStorage();

