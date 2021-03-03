import * as store from "./store";
import { IChat } from "./model";

export function createChat(usersId: String[]) {
	if (!usersId || usersId.length < 2) {
		return Promise.reject("Error while creating a chat. You need at least 2 users to create a chat.");
	}
	const chat: IChat = {
		users: usersId,
	};
	return store.createChat(chat);
}

export function getChats() {
	return store.getChats();
}

export function getChatById(id: String) {
	return store.getChats(id);
}

export function listUserChats(userId: String) {
	if (!userId) {
		return Promise.reject("User ID is required to filter the chats.");
	}
	return store.listChatsByUser(userId);
}
