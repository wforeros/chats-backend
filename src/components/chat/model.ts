import { model, Model, Document, Schema } from "mongoose";

export interface IChat {
	users: String[];
}
export interface IDocumentChat extends Document, IChat {}

const mySchema: Schema = new Schema({
	users: [
		{
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	],
});

const chatModel: Model<IDocumentChat> = model("Chat", mySchema);

export default chatModel;
