import { model, Model, Document, Schema } from "mongoose";

export interface IMessage {
	chat: String;
	user: String;
	message: String;
	date: Date;
	file: String;
}
export interface IDocumentMessage extends Document, IMessage {}

const mySchema: Schema = new Schema({
	chat: {
		type: Schema.Types.ObjectId,
		ref: "Chat",
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	message: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	file: String,
});

const messageModel: Model<IDocumentMessage> = model("Message", mySchema);

export default messageModel;
