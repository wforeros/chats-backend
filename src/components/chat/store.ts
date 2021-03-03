import ChatModel from "./model";
import { IChat } from "./model";

export async function createChat(chat: IChat) {
	try {
		const modelChat = new ChatModel(chat);
		const response = await modelChat.save();
		return response;
	} catch (e) {
		return e;
	}
}

export async function listChatsByUser(userId: String) {
	const filter = { users: userId };
	return new Promise((resolve, reject) => {
		ChatModel.find(filter)
			.populate("users")
			.exec((error, populatedData) => {
				if (error) {
					return reject(error);
				}
				return resolve(populatedData);
			});
	});
}

export async function getChats(_id?: String) {
	let filter = {};
	if (_id) {
		filter = { _id };
	}
	return new Promise((resolve, reject) => {
		try {
			ChatModel.find(filter)
				.populate("users")
				.exec((error, populatedData) => {
					if (error) {
						return reject(error);
					}
					return resolve(populatedData);
				});
		} catch (error) {
			return reject(error);
		}
	});
}
