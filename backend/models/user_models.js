import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
    }
},{
    timestamps : true
})

const User = mongoose.model("User", userSchema)

export default User