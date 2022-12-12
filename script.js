const container = document.querySelector('.girdContainer');
const buttons = document.querySelectorAll('button');
const slideBar = document.getElementById('slideBar');
const slideValue = document.getElementById('slideValue');

let numDivs = slideBar.value;

makeDivs(numDivs);
setGrid();
let gridItems = document.querySelectorAll('.gridItem');
slideValue.textContent = `${slideBar.value}`;

Default();
slideBar.oninput = function() { resizeDiv() };
buttons.forEach(button => button.addEventListener('click', () => {
    slideBar.oninput = function() { resizeDiv() };
    modeSelection(button);
}));

//The divs won't reset when I change the size
function resizeDiv()
{
    const newValue = slideBar.value;
    const currentValue = numDivs;

    if (newValue != currentValue)
    {
        numDivs = newValue;
        makeDivs(numDivs);
        setGrid();
        gridItems = document.querySelectorAll('.gridItem');
        gridItems.forEach(item => item.style.backgroundColor = 'white');
        Default();
        slideValue.textContent = `${newValue}`;
    }
}

function randomColor()
{
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);

    const rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}


const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min) +1);

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
    else if (button.classList.value == 'rainbow')
    {
        gridItems.forEach(item => item.addEventListener('mouseover', () => {
            item.style.backgroundColor = randomColor();
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
        Default();
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