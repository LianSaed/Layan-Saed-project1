import { getData } from './courses.js';

const generateDetails = async () => {
    const container = document.getElementById('course-intro');
    // Get parameters from the current URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let course;
    let data = await getData('https://liansaed.github.io/Layan-Saed-project1/javaScript/data.json');
    
    let cardId = urlParams.get('id');
    data.forEach((cardItems) => {
        if (parseInt(cardId) === cardItems.id) {
            course = JSON.parse(JSON.stringify(cardItems));
            console.log(course)
        }
    })
    let content = `
            <div class="background-color"></div>
            <div class="course-summary">
                <h2 class="course-intimation">${course.intimation}</h2>
                <h1 class="course-title">${course.title}</h1>
                <div class="details-rating-stars">
                    <i class="fa-sharp fa-solid fa-star fa-sm"></i>
                    <i class="fa-sharp fa-solid fa-star fa-sm"></i>
                    <i class="fa-sharp fa-solid fa-star fa-sm"></i>
                    <i class="fa-sharp fa-solid fa-star fa-sm"></i>
                    <i class="fa-sharp fa-solid fa-star-half-stroke fa-sm"></i>
                    </div>
                <p class="course-description">${course.description}</p>
            </div>
            <div class="favourite-options">
                <div id="course-img"></div>
                <div class="align-options">
                    <h2 class="course-author line-height"> <span>${course.title}</span> by <a href="#">${course.author}</a></h2>
                    <div class="add-option line-height">
                        <p>Interested about this topic?</p>
                        <button class="button">Add to favourites <i class="fa-regular fa-heart"></i></button>
                        <p class="credit">Unlimited Credits</p>
                    </div>
                </div>
            </div>
            <div class="sub-topics" id="sub-topics">
                <div class="topic" id="topic-head"><h3>${course.title} Sub Topics</h3></div>
            </div>
            `;
    // Append newyly created card element to the container
    container.innerHTML += content;
    document.getElementById(`course-img`).style.backgroundImage = "url(" + course.ImagePath + ")";
    const topics = document.getElementById('sub-topics');
    content = ``;
    course.subTopics.forEach(function (topic, idx) {
        console.log(topic)
        content +=
            `
            <div class="topic" id="topic-${idx}">
                <h2><i class="fa-regular fa-circle-check check-style"></i> ${topic}</h2>
            </div>
        `;
    })
    topics.innerHTML += content;
}

generateDetails()
