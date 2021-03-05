import express from "express";
import multer from "multer";
import * as response from "../../network/response";
import * as messageController from "./controller";

const router = express.Router();
const upload = multer({
	dest: "public/files/",
});

console.log("Setting up message routes ");

router.get("/", async function (req: express.Request, res: express.Response) {
	const filterMessages = req.query.chat || null;
	try {
		const messages = await messageController.getMessages(filterMessages);
		response.succcess(req, res, messages, 201);
	} catch (e) {
		response.error(req, res, "Error while getting messages", 500, e);
		res.status(200).send();
	}
});

router.post("/", upload.single("file"), async function (req: express.Request, res: express.Response) {
	try {
		const message = await messageController.addMessage(req.body.chat, req.body.user, req.body.message, req.file);
		response.succcess(req, res, message, 200);
	} catch (e) {
		console.log(e);
		response.error(req, res, "Error while creating a message", 500, e);
	}
});

router.delete("/:id", function (req: express.Request, res: express.Response) {
	messageController
		.deleteMessage(req.params.id)
		.then(() => {
			response.succcess(req, res, `Mensaje con ID ${req.params.id} eliminado correctamente`, 200);
		})
		.catch((e) => {
			response.error(req, res, "Error interno", 500, e);
		});
});

router.patch("/:id", function (req: express.Request, res: express.Response) {
	messageController
		.updateMessage(req.params.id, req.body.message)
		.then((data) => {
			response.succcess(req, res, data, 200);
		})
		.catch((e) => {
			console.log(e);
			response.error(req, res, "Internal error", 500, e);
		});
});

export default router;
