import Config from "./config/config";
import db from "mongoose";
db.Promise = global.Promise;

export default async function connectToDatabase() {
	console.log("Conectando db");
	const URL = Config.DB_URL;
	console.log(URL);
	try {
		await db.connect(URL, {
			useNewUrlParser: true,
		});
		console.log("[db] Conectada con éxito");
	} catch (error) {
		console.log("[db] Error conectando la base de datos.");
		console.log(error);
	}
}
