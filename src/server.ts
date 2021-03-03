import express from "express";
import bodyParser from "body-parser";
import setUpRoutes from "./network/routes";
import connectToDatabase from "./db";

connectToDatabase();
const app: express.Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

setUpRoutes(app);

app.listen(3000);
console.log("La app está escuchando en el puerto 3000");
