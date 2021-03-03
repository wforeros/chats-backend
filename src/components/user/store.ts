import UserModel, { IUser } from "./model";

export function addUser(user: IUser) {
	const newUser = new UserModel(user);
	return newUser.save();
}

export async function getUsers(userFilter?: String) {
	let filter = {};
	if (userFilter != undefined) {
		filter = {
			name: userFilter,
		};
	}
	return UserModel.find(filter);
}
