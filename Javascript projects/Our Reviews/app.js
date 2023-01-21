const reviews = {

    id: 1,
    name: "Shaik roshan Zameer",
    job: "DI Engineer",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.textgiraffe.com%2FRoshan%2F&psig=AOvVaw20iiNkF2vabhih52GqwhqJ&ust=1674410102168000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLiI7e2d2fwCFQAAAAAdAAAAABAE",
    text:
        "I am Roshan Zameer . I am DI Engineer in brillo working with USA clients to resolve all technical issues.",

    id: 2,
    name: "Shaik roshan Zameer",
    job: "DI Engineer",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.textgiraffe.com%2FRoshan%2F&psig=AOvVaw20iiNkF2vabhih52GqwhqJ&ust=1674410102168000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLiI7e2d2fwCFQAAAAAdAAAAABAE",
    text:
        "I am Roshan Zameer . I am DI Engineer in brillo working with USA clients to resolve all technical issues."
}

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// we starting item

let currentItem = 0;

// load intial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
})

// show person based on item

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    // img.src = reviews[person].img // u can write this also
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem)
});
//show prev person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length-1;
    }
    showPerson(currentItem)
});