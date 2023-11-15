let courseDetailes;

const generateDetails = (course) => {

    //const container = document.getElementById('course-intro');
    console.log("test")

    const content = `
                <h2>${course.intimation}</h2>
                <h1>${course.title}</h1>
                <p>Author: ${course.description}</p>
            `;
    // Append newyly created card element to the container

    courseDetailes = content;
    //container.innerHTML += 
}
export default generateDetails;