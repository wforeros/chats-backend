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

// Se toma el entorno que se está usando
const { ENV_NODE } = process.env;

const DB_URL: any = process.env.DB_URL;

export default {
	NODE_ENV: process.env.NODE_ENV || "development",
	HOST: process.env.HOST || "127.0.0.1",
	PORT: process.env.PORT || 3000,
	DB_URL,
};
