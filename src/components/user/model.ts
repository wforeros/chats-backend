import { Schema, model, Model, Document } from "mongoose";

export interface IUser {
	name: String;
}

export interface IDocumentUser extends Document, IUser {}

const mySchema: Schema = new Schema({
	name: String,
});

const messageModel: Model<IDocumentUser> = model("User", mySchema);

export default messageModel;
