const canvas = document.querySelector("#canvas");

const square = document.createElement("div");
square.style.width = "32px";
square.style.height = "32px";
// square.style.border = "solid black 1px";
square.style.backgroundColor = "white";
square.classList.add("square");

let brushColor = "black";

const btn = document.querySelector("#btn");

let gridWidth = 16;
newCanvas(gridWidth);

btn.addEventListener("click", function () {

    gridWidth = prompt("What width would you like your canvas to be? Must be lower than 100");
    if (!isNaN(gridWidth) && gridWidth <= 100)
    {
        newCanvas(gridWidth);
    }
    else
    {
        alert("Please Enter A Valid Number");
    }
    
    
})

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", function (){
    canvas.innerHTML = "";
    newCanvas(gridWidth);

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
        elem.addEventListener("mouseover", function (e) {
            elem.style.backgroundColor = brushColor;
        });

    })

    let colorArray = document.querySelectorAll(".colorBtn");

    colorArray.forEach(function(elem){

        elem.addEventListener("click", function(){
            let style = getComputedStyle(elem);
            console.log(style["background-color"]);
            brushColor = style["background-color"];
        })

        elem.addEventListener("mouseover", function(){
            elem.style.border = "solid rgb(15, 15, 15) 8px";
        })
        elem.addEventListener("mouseout", function(){
            elem.style.border = "solid white 0px";
        })
    })

}





