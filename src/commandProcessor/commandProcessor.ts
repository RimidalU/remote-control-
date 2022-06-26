import { getMousePosition } from '../helpers/getMousePosition.js';
import pkg from 'robotjs';
const { getMousePos } = pkg;
import robot from 'robotjs';
import internal from "stream";

export  const commandProcessor = async (command: string, params: string[], WSStream: internal.Duplex) => {

  const { x, y } = getMousePos();
  const incrementMousePosition = getMousePosition(params)

	switch (command) {
		case 'mouse_up':
      robot.moveMouse(x, y - incrementMousePosition[0]);
      WSStream.write(`mouse_up ${y - incrementMousePosition[0]} \0`);
			break;

		case 'mouse_down':

			break;

    case 'mouse_left':

      break;

    case 'mouse_right':

      break;

		default:
      console.log('Unknown command:', command);
			break;
	}
};
