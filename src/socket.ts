import { Server } from "socket.io";
import * as http from "http";

let socket: Server;

export function connect(server: http.Server) {
	socket = new Server(server, {
		cors: {
			origin: "*",
			methods: ["GET", "POST"],
		},
	});
}

export function getSocket() {
	return socket;
}
