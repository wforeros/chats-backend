import express from "express";
import * as response from "../../network/response";
import * as chatController from "./controller";

const router = express.Router();

router.post("/", async function (req, res) {
	const users = req.body.users;
	try {
		const chat = await chatController.createChat(users);
		response.succcess(req, res, chat, 201);
	} catch (e) {
		response.error(req, res, "Internal error", 500, e);
	}
});

router.get("/", async function (req, res) {
	try {
		const chats = await chatController.getChats();
		response.succcess(req, res, chats, 200);
	} catch (e) {
		console.log(e);
		response.error(req, res, "Internal error", 500, e);
	}
});

router.get("/:userId", async function (req, res) {
	try {
		const chat = await chatController.listUserChats(req.params.userId);
		response.succcess(req, res, chat, 200);
	} catch (error) {
		response.error(req, res, "Internal error.", 500, error);
	}
});

router.get("/get-chat/:id", async function (req, res) {
	try {
		const chat = await chatController.getChatById(req.params.id);
		response.succcess(req, res, chat, 200);
	} catch (error) {
		response.error(req, res, "Internal error.", 500, error);
	}
});

export default router;
