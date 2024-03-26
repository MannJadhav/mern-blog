import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String, // Corrected type
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true,
    }
}, { timestamps: true }); // Moved timestamps option outside the schema

const User = mongoose.model('User', userSchema);

export default User;
