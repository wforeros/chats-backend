import express from "express";
import messagesRouter from "../components/message/network";
import usersRouter from "../components/user/network";
import chatRouter from "../components/chat/network";

const setUpRoutes = function (server: express.Express) {
	console.log("Setting routes");
	server.use("/message", messagesRouter);
	server.use("/user", usersRouter);
	server.use("/chat", chatRouter);
	console.log("Routes setted");
};

export default setUpRoutes;
