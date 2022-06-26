import pkg from 'robotjs';
const { dragMouse, mouseToggle, setMouseDelay } = pkg;

const STEP = 0.1;

export const drawCircle = (x: number, y: number, radius: number) => {

  setMouseDelay(100)
  for (let i = 0; i < Math.PI * 2; i += STEP) {

    const newCoordX = x + radius * Math.cos(i);
    const newCoordY = y + radius * Math.sin(i);

    dragMouse(newCoordX, newCoordY);
    if (i === 0) {
      mouseToggle('down');
    }
  }
  dragMouse(x + radius, y);
  mouseToggle('up');
  return true;
};