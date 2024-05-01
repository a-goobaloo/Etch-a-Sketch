const container = document.querySelector("#container");


for (let i = 0; i < 16;i ++){
    for (let i = 0; i < 16;i ++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row.cloneNode(true));
    }
}
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);


const draw = document.querySelector("div");
draw.addEventListener("mousedown", (e) => {
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

const button = document.querySelector(".size");
button.addEventListener("click", () => {
    // const size = parseInt(prompt("Enter number of squares per side: "));
    const deleteItem = document.querySelector("#container");
    deleteItem.remove();
})