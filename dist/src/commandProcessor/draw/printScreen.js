import Jimp from 'jimp';
import pkg from 'robotjs';
const { screen } = pkg;
export const printScreen = async (x, y) => {
    let img = screen.capture(x - 100, y - 100, 200, 200);
    let data = [];
    let bitmap = img.image;
    let bitmapLength = bitmap.length;
    let i;
    for (i = 0; i < bitmapLength; i += 4) {
        data.push(bitmap[i + 2], bitmap[i + 1], bitmap[i], bitmap[i + 3]);
    }
    const jimp = new Jimp({ data: new Uint8Array(data), width: 200, height: 200 });
    const buff = await jimp.getBase64Async(Jimp.MIME_PNG);
    const base64 = buff.split(',')[1];
    return base64;
};
//# sourceMappingURL=printScreen.js.map