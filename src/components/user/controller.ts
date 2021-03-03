import * as store from "./store";
import { IDocumentUser, IUser } from "./model";

export function addUser(name: String): Promise<IDocumentUser | string> {
	if (!name) {
		return Promise.resolve("Invalid data. Name is required to create a user.");
	}
	const user: IUser = {
		name,
	};
	return store.addUser(user);
}

export async function getUsers(name?: any) {
	return await store.getUsers(name);
}
