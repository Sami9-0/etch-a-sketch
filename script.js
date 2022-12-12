const container = document.querySelector('.girdContainer');
const buttons = document.querySelectorAll('button');

let numDivs = 20;

makeDivs(numDivs);
setGrid();
const gridItems = document.querySelectorAll('.gridItem');

Default();
buttons.forEach(button => button.addEventListener('click', () => {
    Default();
    modeSelection(button);
}));





function Default()
{
    gridItems.forEach(item => item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'black';
    }));
}
function modeSelection(button)
{
    if (button.classList.value == 'normal')
    {
        gridItems.forEach(item => item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black';
        }));
    }
    else if (button.classList.value == 'erase')
    {
        gridItems.forEach(item => item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'white';
        }));
    }
    else if (button.classList.value == 'clear')
    {
        gridItems.forEach(item => item.style.backgroundColor = 'white');
    }
}

function setGrid()
{
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${numDivs}, ${(500/numDivs)}px)`;
    container.style.gridTemplateRows = `repeat(${numDivs}, ${(500/numDivs)}px)`;
}


function makeDivs(numDivs)
{
    for (let i = 0; i < numDivs**2; i++)
    {
        const div = document.createElement('div');
        div.classList.add('gridItem');
        container.appendChild(div);
    }
}