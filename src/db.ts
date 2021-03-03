import Config from "./config/config";
import db from "mongoose";
db.Promise = global.Promise;

//mongodb+srv://db_user_wilsonf:WilsonCamilo01@cluster0.ihfqa.mongodb.net/telegrom
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
