import mongoose, { model, models } from 'mongoose'



const userSchema = new mongoose.Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    creditBalance: { type: Number, default: 5 },

})


const User = models.User || model('User', userSchema);
export default User