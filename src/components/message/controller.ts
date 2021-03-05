import { getSocket } from "../../socket";
import { IDocumentMessage, IMessage } from "./model";
import * as store from "./store";

export function getMessages(filterChat?: any) {
	return new Promise(async (resolve, reject) => {
		try {
			const messages = await store.getMessages(filterChat);
			resolve(messages);
		} catch (e) {
			console.log(e);
			reject("Error while getting messages");
		}
	});
}

export function addMessage(chat: String, user: String, message: String, file?: any) {
	return new Promise(async (resolve, reject) => {
		if (!chat || !user || !message) {
			console.log("[MessageController] Values for chat, user, and/or message not found.");
			reject("Chat, User and message are required to create a new message");
		}
		let fileUrl = "";
		if (file) {
			fileUrl = `http://localhost:3000/files/${file.filename}`;
		}
		const fullMessage: IMessage = {
			chat,
			user,
			message,
			date: new Date(),
			file: fileUrl,
		};
		store.addMessage(fullMessage)
			.then((data) => {
				getSocket().emit("message", fullMessage);
				resolve(data);
			})
			.catch((e) => {
				console.log(e);
				reject(e);
			});
	});
}

export function updateMessage(id: String, message: String): Promise<IDocumentMessage | null> {
	return new Promise(async (resolve, reject) => {
		if (!id || !message) {
			reject("Invalid data");
		}
		const result = await store.updateText(id, message);
		resolve(result);
	});
}

export function deleteMessage(id: String | null) {
	return new Promise(async (resolve, reject) => {
		if (!id) {
			reject("ID value is required to delete a message");
			return false;
		}
		store.removeMessage(id)
			.then((data) => {
				resolve(data);
			})
			.catch((e) => {
				reject(e);
			});
	});
}
