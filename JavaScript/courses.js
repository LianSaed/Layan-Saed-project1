import generateDetails from "./details.js";

const createCoursesCards = (data) => {
    const container = document.getElementById('main');
    data.forEach(function (course, idx) {
        console.log(course)
        // Construct card content
        const content = `
            <a href="./details.html" id="course-${idx}" class="course-card">
                <div class="course-img" id="img-${idx}"></div>
                <div class="course-info">
                    <h2>${course.intimation}</h2>
                    <h1>${course.title}</h1>
                    <h3>Author: ${course.author}</h3>
                </div>
            </a>
            `; //onclick="${generateDetails(course)}"
        // Append newyly created card element to the container
        container.innerHTML += content;
        document.getElementById(`img-${idx}`).style.backgroundImage = "url(" + course.ImagePath + ")"
    })
}

createCoursesCards(data);