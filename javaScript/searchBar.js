import { data, createCoursesCards } from './courses.js'

// Function to debounce input events
function debounce(func, delay) {
    var timer;
    return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(context, args);
        }, delay);
    };
}

// Function to handle input events
function handleInput(showFilteredCards, data, sortSelecteElement, filterSelecteElement) {
    let sortOption = sortSelecteElement.options[sortSelecteElement.selectedIndex];
    let filterOption = filterSelecteElement.options[filterSelecteElement.selectedIndex];
    let searchedCards = [];
    console.log(sortOption.value + " " + filterOption.value)

    // This function will be called after the debounce delay
    let inputValue = searchInput.value;
    console.log("Debounced Input Value:", inputValue);
    if (filterOption.value == 0) {
        searchedCards = data.filter((card) => { return card.topic.toLowerCase().includes(inputValue.toLowerCase()) })
    } else if (filterOption.value == 1) {
        searchedCards = data.filter((card) => { return card.category.toLowerCase().includes(inputValue.toLowerCase()) })
    }

    console.log(searchedCards)
    //sort
    if (sortOption.value == 1) { sortByProperty(searchedCards, 'topic') }
    else if (sortOption.value == 2) { sortByProperty(searchedCards, 'name') }
    //filter
    showFilteredCards(searchedCards);
}

const sortByProperty = (arr, propertyName) => {
    arr.sort((a, b) => {
        const propA = a[propertyName].toLowerCase();
        const propB = b[propertyName].toLowerCase();

        if (propA < propB) {
            return -1;
        }
        if (propA > propB) {
            return 1;
        }
        return 0;
    });
}

let searchInput = document.getElementById('searchbar');
let sortSelecteElement = document.getElementById('selection1');
let filterSelecteElement = document.getElementById('selection2');
// Add an event listener for the 'input' event
searchInput.addEventListener("input", debounce(function () {
    handleInput(createCoursesCards, data, sortSelecteElement, filterSelecteElement);
}, 300));
sortSelecteElement.addEventListener("input", debounce(function () {
    handleInput(createCoursesCards, data, sortSelecteElement, filterSelecteElement);
}, 300));
filterSelecteElement.addEventListener("input", debounce(function () {
    handleInput(createCoursesCards, data, sortSelecteElement, filterSelecteElement);
}, 300));