const container = document.querySelector("#container");
container.style.cssText = "display: flex; flex-direction: column; justify-content: center; align-items: center; width: 992px; height: 992px; background-color: blue;";

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.style.cssText = "display:flex; height:62px; width:992px; background-color:purple;";
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        let box = document.createElement("div");
        box.style.cssText = "background-color:red; height:62px; width:62px;";
        row.appendChild(box);
        console.log("added box")
        /*box.addEventListener("mouseover", () => {
            box.style.backgroundColor = 'black';
        })*/
    }
}
container.addEventListener("mouseover", (event) => {
    let target = event.target;
    target.style.backgroundColor = 'black';
})

function reset(dim) {
    container.innerHTML= null;
    const pixels = (992/dim) + "px";
    for (let i = 0; i < dim; i++) {
        let row = document.createElement("div");
        row.style.cssText = "display:flex; width:992px; height:"+pixels;
        container.appendChild(row);
        for (let j = 0; j < dim; j++) {
            let box = document.createElement("div");
            box.style.cssText = "display:flex; background-color:red; width:"+pixels+";"+"height:" + pixels + ";";
            row.appendChild(box);
            console.log("added box")
            /*box.addEventListener("mouseover", () => {
                box.style.backgroundColor = 'black';
            })*/
        }
    }
}

const btn = document.querySelector('#reset');
btn.addEventListener("click", () => {
    const dim = prompt("Enter a number for the height and width of your sketch pad! (max 100)");
    reset(dim);
})