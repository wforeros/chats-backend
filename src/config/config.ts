import dotenv from "dotenv";
import path from "path";

// Enum con los posible valores del ENV_NODE
export enum IEnv {
	DEV = "development",
	PROD = "production",
}

// Se modifica la ubicación del archivo .env para que dotenv lo use
dotenv.config({
	path: path.join(path.dirname(__filename), "../../.env"),
});

export default {
	NODE_ENV: process.env.NODE_ENV || "development",
	HOST: process.env.HOST || "127.0.0.1",
	PORT: process.env.PORT || 3000,
	DB_URL: process.env.DB_URL,
};
