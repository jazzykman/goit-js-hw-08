const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');

createButton.addEventListener('click', () => {
  const amount = parseInt(controls.querySelector('input').value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); 

  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes); 
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
