import Jimp from 'jimp';
import { httpServer } from './src/http_server/index.js';
import robot from 'robotjs';
import { createWebSocketStream, WebSocketServer } from 'ws';
import { commandProcessor } from './src/commandProcessor/commandProcessor.js';

const HTTP_PORT = 3000;
const WS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
	port: WS_PORT,
});

wss.on('connection', (ws): void => {
	console.log('WebSocketServer connected!');
	const WSStream = createWebSocketStream(ws, { encoding: 'utf-8', decodeStrings: false });
	WSStream.on('data', async (data: any) => {
		const [command, ...params] = data.toString().split(' ');
		try {
			commandProcessor(command, params, WSStream);
		} catch (err) {
			console.log(err);
			WSStream.write(err);
		}
	});
});
