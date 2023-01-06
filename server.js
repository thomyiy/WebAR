import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import https from 'https';
import fs from 'fs';
import bodyParser from 'body-parser';

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const PORT = 4200;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());

/*app.listen(PORT, () => {
    console.log("Application started and Listening on port " + PORT);
});*/


// serve your css as static
app.use(express.static(__dirname));
app.use(express.static('public'))

https.createServer(options,app).listen(PORT, () => {
    console.log("Application started and Listening on port " + PORT);
});
