import { getMousePosition } from './../helpers/getMousePosition';
import { getMousePos, moveMouse } from 'robotjs';
import robot from 'robotjs';
import internal from "stream";

const commandProcessor = async (command: string, params: string[], WSStream: internal.Duplex) => {

  const { x, y } = getMousePos();
  const incrementMousePosition = getMousePosition(params)

	switch (command) {
		case 'mouse_up':

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

export { commandProcessor };
