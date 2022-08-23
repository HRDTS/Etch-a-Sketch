// task: create a 16x16 grid model (resembling the Etch-a-Sketch game). The layout should be editable from 1x1 to 100x100 layouts. 

const body = document.querySelector("body")
const bigContainer = document.createElement("div")
body.appendChild(bigContainer)

// bigContainer is the big container where I will put in all the grid squares. "bigContainer" is added as a child to the "body" parent.

function createSquareGrids() {
    for(let i = 0; i < 16**2; i++) {
        let createMiniContainer = document.createElement("div")
        createMiniContainer.className = "div1"
        createMiniContainer.textContent = ""
        createMiniContainer.addEventListener ('mouseenter', () => createMiniContainer.style.backgroundColor ="red")
        createMiniContainer.addEventListener ('mouseleave', () => createMiniContainer.style.backgroundColor ="rgb(55, 133, 19)")
        bigContainer.appendChild(createMiniContainer)
    }
}
createSquareGrids()
// The loop above creates all the square grids that fit in the big container.
// the class name is "div1" for all the square grids. I use this class name in css to change the features of the square grids.

function promptMinMax () {
    let promptValue = prompt("Choose a grid layout from 1 to 100");
    for (let i = 0; i < 1; i++) {
        if (promptValue < 1) {
            alert("The lowest value you can enter is 1. Layout is set to 1 tile.")
            return 1;
        } else if (promptValue > 100) {
            alert("The highest value you can enter is 100. Layout is set to 100 tiles.")
            return 100; 
        } else {
            return promptValue
        }
    }
}

const layoutButton = document.querySelector('#layoutButton')
layoutButton.addEventListener  ('click', () => {
    let smallGrids = bigContainer.querySelectorAll('.div1');
    for(let i = 0; i < smallGrids.length; i++) {
        bigContainer.removeChild(smallGrids[i])
    }
    let grid = promptMinMax()
    let tileWidth = 100 / grid
    for(let i = 0; i < grid**2; i++) {
        let createMiniContainer = document.createElement("div")
        createMiniContainer.className = "div1"
        createMiniContainer.textContent = ""
        createMiniContainer.style.flexBasis = tileWidth+"%"
        createMiniContainer.addEventListener ('mouseenter', () => createMiniContainer.style.backgroundColor ="red")
        createMiniContainer.addEventListener ('mouseleave', () => createMiniContainer.style.backgroundColor ="rgb(55, 133, 19)")
        bigContainer.appendChild(createMiniContainer)
    }
})
 



