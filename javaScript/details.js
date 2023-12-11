import { getData } from './courses.js';

const generateDetails = async () => {
    const container = document.getElementById('course-intro');
    // Get parameters from the current URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let cardId = urlParams.get('id');
    let course = await getData(`https://tap-web-1.herokuapp.com/topics/details/${cardId}`);

    let content = `
            <div class="background-color"></div>
            <div class="course-summary">
                <h2 class="course-intimation">${course.category}</h2>
                <h1 class="course-title">${course.topic}</h1>
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
                    <h2 class="course-author line-height"> <span>${course.topic}</span> by <a href="#">${course.name}</a></h2>
                    <div class="add-option line-height">
                        <p>Interested about this topic?</p>
                        <button class="button">Add to favourites <i class="fa-regular fa-heart"></i></button>
                        <p class="credit">Unlimited Credits</p>
                    </div>
                </div>
            </div>
            <div class="sub-topics" id="sub-topics">
                <div class="topic" id="topic-head"><h3>${course.topic} Sub Topics</h3></div>
            </div>
            `;
    // Append newyly created card element to the container
    container.innerHTML += content;
    document.getElementById(`course-img`).style.backgroundImage = "url(" + "../logos/" + course.image + ")";
    const topics = document.getElementById('sub-topics');
    content = ``;
    course.subtopics.forEach(function (topic, idx) {
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
