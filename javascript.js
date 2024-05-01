const container = document.querySelector("#container");
const body = document.querySelector("body")


function grid(size){
    for (let i = 0; i < size;i ++){
        //create one row first then another for loop for squares in that row.
            let row = document.createElement("div");
            container.appendChild(row);
            row.className = "row";           
        for (let j = 0; j < size;j ++){
            let square = document.createElement("div");
            row.appendChild(square);
            square.className = "square";
        }
    }
}

grid(16);

const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);


// const draw = document.querySelector("div");
// draw.addEventListener("mousedown", (e) => {
//     e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// })

// const button = document.querySelector(".size");
// button.addEventListener("click", () => {
//     const size = parseInt(prompt("Enter number of squares per side: "));
//     const deleteItem = document.querySelector("#container");
//     deleteItem.remove();  
//     const newContainer = document.createElement("div");
//     newContainer.setAttribute("id", "container");
//     body.appendChild(newContainer);
//     for (let i = 0; i < size;i ++){
//         for (let i = 0; i < size;i ++){
//             const row = document.createElement("div");
//             row.classList.add("row");
//             newContainer.appendChild(row.cloneNode(true));
//         }
//     }
// })




