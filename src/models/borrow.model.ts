import { Schema, model } from "mongoose";
import { IBorrow } from "../@types/borrow";

const borrowSchema = new Schema<IBorrow>({
    book: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },
    quantity: { 
        type: Number,
        min: [0, "Quantity must be a positive number"],
        required: true 
    },
    dueDate: { type: Date, required: true }
}, {
    timestamps: true,
    versionKey: false
});

const Borrow = model<IBorrow>("Borrow", borrowSchema);

export default Borrow;