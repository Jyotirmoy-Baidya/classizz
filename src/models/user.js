import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Provide Username"],
    },
    email: {
        type: String,
        required: [true, "Please Provide Email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is Required'],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isTeacher: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;