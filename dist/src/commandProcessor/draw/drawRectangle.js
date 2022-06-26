import pkg from 'robotjs';
const { mouseToggle, moveMouse, setMouseDelay } = pkg;
export const drawRectangle = (x, y, width, height) => {
    setMouseDelay(100);
    mouseToggle('down');
    moveMouse(x + width, y);
    moveMouse(x + width, y + height);
    moveMouse(x, y + height);
    moveMouse(x, y);
    mouseToggle('up');
    return true;
};
//# sourceMappingURL=drawRectangle.js.map