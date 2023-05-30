const getColorButton = document.querySelector(".enterBtn");
const getColorHexElement = document.querySelector("input[type=color]");
const selectionElement = document.querySelector("select");
const colorTextElements = document.querySelectorAll(".color-item-text");

const colorItems = document.querySelectorAll(".color-item");

let hexValue = getColorHexElement.value;
let modeString = selectionElement.value;

getColorButton.addEventListener("click", getColor);

function setEnteredValues(){
    hexValue = getColorHexElement.value;
    modeString = selectionElement.value;
}

function setColorElements(data){
    colorItems.forEach((el, index) => {
        let currentColor = data.colors[index].hex.value;
        el.style.backgroundColor = currentColor;
    })

} 

function setColorTextElements(data){
    colorTextElements.forEach((el, index) => {
        let currentColor = data.colors[index].hex.value;
        el.textContent = currentColor;
    })
}

async function getColor(){
    setEnteredValues()
    const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue.slice(1)}&mode=${modeString}`);
    const jsonData = await response.json();
    setColorElements(jsonData)
    setColorTextElements(jsonData)
}

getColor();
