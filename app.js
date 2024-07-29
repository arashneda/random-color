const containerEl = document.querySelector(".container");
const btn = document.querySelector(".btn");

for (let index = 0; index < 230; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}


const colorContainers = document.querySelectorAll(".color-container")
btn.addEventListener("click" , ()=>{
    colorGenerator()
})

colorGenerator()
function colorGenerator(){
    colorContainers.forEach(colorEl => {
        const color = randomColor();
        colorEl.style.backgroundColor = "#"+color;
        colorEl.innerHTML = "#"+color
    });
}

randomColor()
function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength= 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength ; index++) {
        const colorNum = Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(colorNum , colorNum +1 );
    }
    return colorCode
}
