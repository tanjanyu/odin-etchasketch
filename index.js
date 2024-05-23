let totalRowCol = 16, buttonPressed = 0;

function makeGrid(numberOfRows) {
    if (buttonPressed !== 0) {
        deleteDivs();
    }
    let boxLength = (window.innerHeight / numberOfRows);
    for (let i = 0; i < numberOfRows; i++) {
        let newRow = document.createElement("div");
        newRow.classList.add("rows");       
        document.querySelector(".overall").appendChild(newRow); 
        for (let j = 0; j < numberOfRows; j++) {
            let newBox = document.createElement("div");
            newBox.style.height = (String(boxLength) + "px");
            newBox.style.width = (String(boxLength) + "px");
            newBox.classList.add("row-element");
            newBox.setAttribute("data-brightness", "1");
            newRow.appendChild(newBox);
            newBox.addEventListener("mouseover", makeColour);
        }
    }
    totalRowCol = numberOfRows;
    buttonPressed = 1;
}

function makeColour(e) {
    let selectedDiv = e.target;
    selectedDiv.style.backgroundColor = "rgb(" +
    String(Math.random() * 255) + ", " +
    String(Math.random() * 255) + ", " +
    String(Math.random() * 255) + ")";
    
    let currentBrightness = Number(selectedDiv.getAttribute("data-brightness"));
    if (currentBrightness !== 0) {
        let newBrightness = currentBrightness - 0.1;
        selectedDiv.style.filter = "brightness(" + String(newBrightness) + ")";
        selectedDiv.setAttribute("data-brightness", (newBrightness));
    }
}

function deleteDivs() {
    for (let i = 0; i < totalRowCol; i++) {
        document.querySelector(".rows").remove();
    }
}

function newSketch() {
    let userInput = 16;
    do {
        userInput = Number(prompt("Grid length", "16"));
    } while (userInput > 100)
    makeGrid(userInput);
}

// Probably going to want to use the unhover event

makeGrid(totalRowCol);
document.querySelector(".overall").addEventListener("hover", function(e) {
    makeColour(e);
});
document.querySelector("button").addEventListener("click", newSketch);