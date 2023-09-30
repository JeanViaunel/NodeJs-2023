import qr from "qr-image";
import fs from "fs";
const data = "https://www.npmjs.com/package/qrcode";
const img = qr.image(data);
img.pipe(fs.createWriteStream("img.png"));
