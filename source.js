const canvas = document.querySelector("#canvas");

const square = document.createElement("div");
square.style.width = "32px";
square.style.height = "32px";
// square.style.border = "solid black 1px";
square.style.backgroundColor = "grey";
square.classList.add("square");

newCanvas(16);

const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    let gridWidth = prompt("What width would you like your canvas to be? Must be lower than 100");

    if (gridWidth <= 100)
    {
        newCanvas(gridWidth);
    }
    else
    {
        alert("Number too high, must be 100 or lower");
    }
    
    
})

function newCanvas(gridWidth) {
    canvas.innerHTML = ""; // clears canvas
    let gridSize = gridWidth*gridWidth;
    let squareSize = document.getElementById("canvas").offsetWidth / gridWidth;
    console.log(squareSize);
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";

    for (let i = 0; i < gridSize; i++) {
        canvas.appendChild(square.cloneNode());
    }

    let squareArray = document.querySelectorAll(".square");
    squareArray.forEach(function (elem) {
        elem.addEventListener("mouseover", function () {
            elem.style.backgroundColor = "black";
        });

    })

}





