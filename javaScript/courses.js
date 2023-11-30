//import generateDetails from "./details.js";

const createCoursesCards = (data) => {
    const container = document.getElementById('main');
    data.forEach(function (course, idx) {
        console.log(course)
        // Construct card content
        const content = `
            <a href="./details.html" id="course-${idx}" class="course-card" >
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
            `; //onclick="${generateDetails(course)}"
        // Append newyly created card element to the container
        container.innerHTML += content;
        document.getElementById(`img-${idx}`).style.backgroundImage = "url(" + course.ImagePath + ")"
    })
}

createCoursesCards(data);