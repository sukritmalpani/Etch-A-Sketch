const container = document.querySelector('.container');
const ask = document.querySelector('.ask');
const resetbtn=document.querySelector('.reset');
let n = 16;
function grid() {
    console.log(n);
    for (let i = 1; i <= n * n; i++) {
        const cell = document.createElement('div');
        cell.style.cssText = `width:calc(650px/${n});height:calc(650px/${n});background:black;`;
        cell.addEventListener('mouseover', () => {
            const colors = ["red", "blue", "green", "pink", "yellow", "royalblue", "purple"];
            const color = colors[Math.floor(Math.random() * 7)];
            cell.style.backgroundColor = `${color}`;
        });
        container.appendChild(cell);

    }
    ask.addEventListener('click', newgrid);
    resetbtn.addEventListener('click', reset);
}
function newgrid() {
    let n = prompt("Enter the dimension");
    if (n === '' || n === null)
        return;
    else {
        clearGrid();

        for (let i = 1; i <= n * n; i++) {
            const cell = document.createElement('div');
            cell.style.cssText = `width:calc(650px/${n});height:calc(650px/${n});background:black;`;
            cell.addEventListener('mouseover', () => {
                const colors = ["red", "blue", "green", "pink", "yellow", "royalblue", "purple"];
                const color = colors[Math.floor(Math.random() * 7)];
                cell.style.backgroundColor = `${color}`;
            });
            container.appendChild(cell);
            console.log(1)
        }
    }
    resetbtn.addEventListener('click', reset);
}
function clearGrid() {
    while (container.firstChild)
        container.removeChild(container.firstChild);
}
function reset(){
    clearGrid();
    grid();
}
grid();