// Added colours to the boxes
const red = document.getElementById("box-1")
red.addEventListener("click", () =>{
    red.style.backgroundColor = "red"; 
    red.style.color = "white"
})

const blue = document.getElementById("box-2")
blue.addEventListener("click", () => {
    blue.style.backgroundColor = "blue";
    blue.style.color = "white"
})

const green = document.getElementById("box-3")
green.addEventListener("click", () => {
    green.style.backgroundColor = "green"
    green.style.color = "white"
})

const yellow = document.getElementById("box-4")
yellow.addEventListener("click", () => {
    yellow.style.backgroundColor = "yellow"
    yellow.style.color = "black"
})

// Added the change text in head tag using function
function changetext(event) {
    event.preventDefault();
    const name = document.getElementById("changename").value.trim();
    document.getElementById("title").textContent = "Hello, " + name;
}
