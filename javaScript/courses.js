import { getData } from "./fetch.js";

export const createCoursesCards = async (data) => {
    const container = document.getElementById('main');
    if (container != undefined) {
        container.innerHTML = ""; //reset container
    }
    data.forEach(function (course, idx) {
        // Construct card content
        const content = `
            <a href="./details.html?id=${course.id}" id="course-${idx}" class="course-card" >
                <div class="course-img" id="img-${idx}"></div>
                <div class="course-info">
                    <h2 class="text-overflow-clip">${course.category}</h2>
                    <h1 class="text-overflow-clip">${course.topic}</h1>
                    <div class="rating-stars">
                        <i class="fa-sharp fa-solid fa-star fa-xs"></i>
                        <i class="fa-sharp fa-solid fa-star fa-xs"></i>
                        <i class="fa-sharp fa-solid fa-star fa-xs"></i>
                        <i class="fa-sharp fa-solid fa-star fa-xs"></i>
                        <i class="fa-sharp fa-solid fa-star-half-stroke fa-xs"></i>
                    </div>
                    <h3 class="text-overflow-clip">Author: ${course.name}</h3>
                </div>
            </a>
            `;
        if (container != undefined) {
            container.innerHTML += content;
            document.getElementById(`img-${idx}`).style.backgroundImage = "url(" + "../logos/" + course.image + ")";
        }
    })
}

const setCards = async () => {
    document.getElementById('loader').style.display = 'block';
    try {
        let data = await getData('https://tap-web-1.herokuapp.com/topics/list');
        document.getElementById('loader').style.display = 'none';
        createCoursesCards(data);
        return data;
    } catch (error) {
        throw error;
    }
}

export const fetchedData = await setCards();