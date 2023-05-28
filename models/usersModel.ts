import { model, models, Schema } from "mongoose";

const UsersSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: { type: String, required: true, unique: true },
        age: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const User = models.User || model("User", UsersSchema);
export default User;
