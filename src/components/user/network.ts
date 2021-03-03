import express from "express";
import * as response from "../../network/response";
import * as userController from "./controller";

const router = express.Router();

router.post("/", function (req, res) {
	const name = req.body.name;
	userController
		.addUser(name)
		.then((data) => {
			response.succcess(req, res, data, 201);
		})
		.catch((e) => {
			response.error(req, res, "Internal error", 500, e);
		});
});

router.get("/", async function (req, res) {
	const name = req.query.name || null;
	console.log(name);
	try {
		const usersFound = await userController.getUsers(name);
		response.succcess(req, res, usersFound, 200);
	} catch (e) {
		response.error(req, res, "Internal error", 500, e);
	}
});
export default router;
