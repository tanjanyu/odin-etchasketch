function makeGrid(numberOfRows) {
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
            newRow.appendChild(newBox);
        }
    }
}

function makeColour(e) {
    
}

// Probably going to want to use the unhover event

makeGrid(30);