import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type todoDocument = HydratedDocument<TodoSchema>;

@Schema()
export class TodoSchema {
    @Prop()
    title: string;

    @Prop()
    desc: string;
}

export const Todo = SchemaFactory.createForClass(TodoSchema)