import { input } from "@inquirer/prompts";
import qr from "qr-image";
import fs from "fs";

// 1. Use the @inquirer/prompts npm package to get user input.
const url = await input({ message: 'Enter your URL here:' });

// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
var qr_svg = qr.image(`${url}`);
qr_svg.pipe(fs.createWriteStream('qr.png'));

// 3. Create a txt file to save the user input using the native fs node module.
fs.writeFile('url.txt', url, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

