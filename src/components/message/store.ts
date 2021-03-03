import MessageModel from "./model";
import { IMessage } from "./model";

export async function addMessage(message: IMessage) {
	try {
		const modelMessage = new MessageModel(message);
		const response = await modelMessage.save();
		return response;
	} catch (e) {
		return e;
	}
}

export function getMessages(filterChat?: String) {
	return new Promise(async (resolve, reject) => {
		let filter = {};
		if (filterChat != null) {
			filter = {
				chat: filterChat,
			};
		}
		try {
			MessageModel.find(filter)
				.populate("user")
				.exec((error, populatedData) => {
					if (error) {
						return reject(error);
					}
					return resolve(populatedData);
				});
		} catch (e) {
			console.log(e);
			reject(e);
			return e;
		}
	});
}

export async function updateText(id: String, message: String) {
	// const foundMessage = await MessageModel.findOne({
	// 	_id: id,
	// });
	const foundMessage = await MessageModel.findById(id);
	if (foundMessage != null) {
		foundMessage.message = message;
		const updatedMessage = await foundMessage.save();
		return updatedMessage;
	}
	return null;
}

export async function removeMessage(id: String) {
	const response = await MessageModel.deleteOne({ _id: id });
	return response;
}
