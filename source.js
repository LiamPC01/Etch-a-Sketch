const canvas = document.querySelector("#canvas");

const square = document.createElement("div");
square.style.width = "32px";
square.style.height = "32px";
// square.style.border = "solid black 1px";
square.style.backgroundColor = "grey";
square.classList.add("square");

for (let i = 0; i < 256; i++) {
    canvas.appendChild(square.cloneNode());
}

let squareArray = document.querySelectorAll(".square");
squareArray.forEach(function (elem) {
    let elemColor = elem.style.backgroundColor;
    elem.addEventListener("mouseover", function(){
        elem.style.backgroundColor = "black";
        console.log("over");
    });
    elem.addEventListener("mouseout", function(){
        elem.style.backgroundColor = elemColor;
        console.log("out");
    });
})


function onHover(elem) {
    // console.log("onHover");
    // console.log(elem);
    // elem.classList.add("hover");
}





