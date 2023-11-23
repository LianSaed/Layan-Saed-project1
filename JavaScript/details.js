const clicked = {
    description: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).",
    title: "HTML",
    author: "Sarah Smith",
    intimation: "Web Development Langauges",
    rating: 4,
    subTopics: ["HTML syntax and structure", "HTML elements and attributes", "HTML forms and input elements",
        "HTML tables and lists", "HTML multimedia elements(audio, video, images)", "HTML accessibility and semantic markup"],
    favorite: 0,
    ImagePath: "../Logos/html.png"
}

const generateDetails = (course) => {
    const container = document.getElementById('course-intro');
    let content = `
            <div class="background-color"></div>
            <div class="course-summary">
                <h2 class="course-intimation">${course.intimation}</h2>
                <h1 class="course-title">${course.title}</h1>
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

generateDetails(clicked)
