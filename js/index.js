// Your code goes here
const btn = document.querySelectorAll('.btn');

btn.forEach(btn => {
    btn.addEventListener("click", function(event) {
    alert("These don't work!")}
    )});

const destination = document.querySelector(".content-destination img");

destination.addEventListener ("wheel", function(event) {
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)"
});

const busImage = document.querySelector(".intro img");
busImage.addEventListener ("blur", function(event) {
})

window.addEventListener('load', function(event){
    alert('Page is FULLY loaded');
});