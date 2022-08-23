const body = document.querySelector("body")
const bigCon = document.createElement("div")

//bigCon is the main container which I will use to insert smaller containers.

bigCon.style.backgroundColor = "orange"
bigCon.style.minHeight = "100vh"
bigCon.style.maxHeight = "100vh"
bigCon.style.height = "100vh"
bigCon.style.display = "flex"
bigCon.style.width = "auto"
bigCon.style.flexWrap = "wrap"
bigCon.style.justifyContent = "space-evenly"
bigCon.style.alignItems = "stretch"


body.appendChild(bigCon)

// This is the function where I insert 256 smaller containers in the bigCon.
 
function initialMiniCon() {
    let gridTiles = 256
    let sqrtGridTiles = 100 / Math.sqrt(gridTiles)
    for(let i = 0; i < gridTiles; i++) {
         let miniCont= document.createElement("div")
         miniCont.classList.add("div" + 1)
         miniCont.style.display = "flex"
         miniCont.style.backgroundColor = "red"
         miniCont.textContent = "" 
         miniCont.style.margin = "0px" 
         miniCont.style.width = sqrtGridTiles+"%"
         miniCont.style.height = "auto"
         let miniContClass = document.getElementsByClassName("div" + 1)
         miniCont.addEventListener('mouseenter', () => miniCont.style.backgroundColor ="black")
         miniCont.addEventListener('mouseleave', () => miniCont.style.backgroundColor ="red")
         bigCon.appendChild(miniCont)
    }
}

initialMiniCon()

// Now I want to delete the smaller containers with removechild() function.

const deleteMiniCont = document.querySelectorAll(".div1")
console.log(deleteMiniCont) 

function loopDelete () {
    
}
//bigCon.removeChild(deleteMiniCont)
 
// Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. at javascript.js:43:6




// the code below is not really relevant for the question
const button = document.querySelector('#button');
button.addEventListener('click', () => {
    function miniCon() {
        let gridTiles = 2**(prompt("Choose from 1 to 100"))
        let sqrtGridTiles = 100 / Math.sqrt(gridTiles)
        for(let i = 0; i < gridTiles; i++) {
             let miniCont= document.createElement("div")
             miniCont.classList.add("div" + 1)
             miniCont.style.display = "flex"
             miniCont.style.backgroundColor = "red"
             miniCont.textContent = "" 
             miniCont.style.margin = "0px" 
             miniCont.style.width = sqrtGridTiles+"%"
             miniCont.style.height = "auto"
    
             let miniContClass = document.getElementsByClassName("div" + 1)
             miniCont.addEventListener('mouseenter', () => miniCont.style.backgroundColor ="black")
             miniCont.addEventListener('mouseleave', () => miniCont.style.backgroundColor ="red")
             bigCon.appendChild(miniCont)
        }
    } 
})
