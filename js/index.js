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
const introSection = document.querySelector(".intro")

const busImage = document.querySelector(".intro img");
busImage.addEventListener ("mouseover", function(event) {
    introSection.style.backgroundImage = "url(https://s.hswstatic.com/gif/now-5a545275-9a27-436e-b64f-3cc12beb4119-1210-680.jpg)"
})

window.addEventListener('load', function(event){
    alert('Page is FULLY loaded');
});

const title = document.querySelectorAll("h2")

title[0].addEventListener ("dblclick", function(event){
    title[0].innerHTML = "LET'S ROLL OUT!"
});

const para = document.querySelectorAll("p")

// para.forEach(para => {
    window.addEventListener("scroll", function(event){
        para.forEach(para => {
        para.style.color = "red";
        // alert("WTF");
    })
})