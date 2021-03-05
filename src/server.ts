import express from "express";
import bodyParser from "body-parser";
import setUpRoutes from "./network/routes";
import connectToDatabase from "./db";
import path from "path";
import cors from "cors";
import config from "./config/config";
import * as http from "http";
import * as socket from "./socket";

const app: express.Express = express();
const server = new http.Server(app);

connectToDatabase();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/app", express.static(path.join(__dirname, "./../public")));

socket.connect(server);
setUpRoutes(app);

server.listen(config.PORT, () => {
	console.log("La app está escuchando en el puerto 3000");
});
