const canvas = document.querySelector("#canvas");
const btn = document.querySelector("#btn");

const square = document.createElement("div");
square.style.width = "32px";
square.style.height = "32px";
square.style.backgroundColor = "white";
square.classList.add("square");
let brushColor = "black";

let gridWidth = 16;
newCanvas(gridWidth);

let sliderValue = document.getElementById("canvasSlider").value;

function showVal(val) {
    let valString = val + " x " + val;
    document.getElementById("sliderLabel").textContent = valString;

}



btn.addEventListener("click", function () {
    sliderValue = document.getElementById("canvasSlider").value;
    newCanvas(sliderValue);
})

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", function () {
    canvas.innerHTML = "";
    newCanvas(sliderValue);

})

function newCanvas(gridWidth) {
    canvas.innerHTML = ""; // clears canvas
    let gridSize = gridWidth * gridWidth;
    let squareSize = document.getElementById("canvas").offsetWidth / gridWidth;
    // console.log(squareSize);
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";

    for (let i = 0; i < gridSize; i++) {
        canvas.appendChild(square.cloneNode());
    }

    let squareArray = document.querySelectorAll(".square");

    squareArray.forEach(function (elem) {
        elem.addEventListener("mouseover", function (e) {
            elem.style.backgroundColor = brushColor;
        });

    })

    let colorArray = document.querySelectorAll(".colorBtn");

    colorArray.forEach(function (elem) {

        elem.addEventListener("click", function () {
            let style = getComputedStyle(elem);
            // console.log(style["background-color"]);
            brushColor = style["background-color"];
        })

        elem.addEventListener("mouseover", function () {
            elem.style.border = "solid rgb(15, 15, 15) 8px";
        })
        elem.addEventListener("mouseout", function () {
            elem.style.border = "solid white 0px";
        })
    })

  

}





