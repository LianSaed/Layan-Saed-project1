
const createCoursesCards = async () => {
    const container = document.getElementById('main');
    let data = await getData('https://liansaed.github.io/Layan-Saed-project1/javaScript/data.json');
    data.forEach(function (course, idx) {
        // Construct card content
        const content = `
            <a href="./details.html?id=${course.id}" id="course-${idx}" class="course-card" >
                <div class="course-img" id="img-${idx}"></div>
                <div class="course-info">
                    <h2 class="text-overflow-clip">${course.intimation}</h2>
                    <h1 class="text-overflow-clip">${course.title}</h1>
                    <div class="rating-stars">
                        <i class="fa-sharp fa-solid fa-star fa-xs"></i>
                        <i class="fa-sharp fa-solid fa-star fa-xs"></i>
                        <i class="fa-sharp fa-solid fa-star fa-xs"></i>
                        <i class="fa-sharp fa-solid fa-star fa-xs"></i>
                        <i class="fa-sharp fa-solid fa-star-half-stroke fa-xs"></i>
                    </div>
                    <h3 class="text-overflow-clip">Author: ${course.author}</h3>
                </div>
            </a>
            `;
        container.innerHTML += content;
        document.getElementById(`img-${idx}`).style.backgroundImage = "url(" + course.ImagePath + ")"
    })
}

export const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        throw error;
    }
}

createCoursesCards();