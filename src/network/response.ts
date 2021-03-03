import express from "express";
export function succcess(req: express.Request, res: express.Response, message: String | unknown, status: number) {
	res.status(status || 200).send({
		error: "",
		body: message,
	});
}

export function error(req: express.Request, res: express.Response, message: String, status: number, details: String) {
	console.error("[Response Error] " + details);
	res.status(status || 500).send({
		error: message,
		body: "",
	});
}
