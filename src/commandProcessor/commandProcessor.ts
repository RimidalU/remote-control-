import { printScreen } from './draw/printScreen.js';
import { drawRectangle } from './draw/drawRectangle.js';
import { drawCircle } from './draw/drawCircle.js';
import { getMousePosition } from '../helpers/getMousePosition.js';
import pkg from 'robotjs';
const { getMousePos } = pkg;
import robot from 'robotjs';
import internal from "stream";

export const commandProcessor = async (command: string, params: string[], WSStream: internal.Duplex) => {

  const { x, y } = getMousePos();
  const incrementMousePosition = getMousePosition(params)

  switch (command) {
    case 'mouse_up':
      robot.moveMouse(x, y - incrementMousePosition[0]);
      WSStream.write(`mouse_up ${y - incrementMousePosition[0]} \0`);
      break;

    case 'mouse_down':
      robot.moveMouse(x, y + incrementMousePosition[0]);
      WSStream.write(`mouse_down ${y + incrementMousePosition[0]} \0`);
      break;

    case 'mouse_left':
      robot.moveMouse(x - incrementMousePosition[0], y);
      WSStream.write(`mouse_left ${x - incrementMousePosition[0]} \0`);
      break;

    case 'mouse_right':
      robot.moveMouse(x + incrementMousePosition[0], y);
      WSStream.write(`mouse_right ${x + incrementMousePosition[0]} \0`);
      break;

    case 'mouse_position':
      WSStream.write(`mouse_position ${x},${y} \0`);
      break;

    case 'draw_circle':
      const radius = incrementMousePosition[0];
      drawCircle(x, y, radius);
      WSStream.write(`draw_circle ${radius} \0`);
      break;

    case 'draw_square': {
      const width = incrementMousePosition[0];
      drawRectangle(x, y, width, width);
      WSStream.write(`draw_square \0`);
      break;
    }
    case 'draw_rectangle':
      const [width, height] = incrementMousePosition;
      drawRectangle(x, y, width, height);
      WSStream.write(`draw_square ${width}\0`);
      break;

    case 'prnt_scrn':
      const base64String = await printScreen(x, y);
      WSStream.write(`prnt_scrn ${base64String} \0`);
      break;

    default:
      console.log('Unknown command:', command);
      break;
  }
};
