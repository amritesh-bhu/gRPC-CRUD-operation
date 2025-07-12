import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    emailId: {
        type: String,
        trim: true,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true
    },
    age: {
        type: Number
    }
})


const userModel = mongoose.model("user", userSchema)

const createUser = async ({ firstName, lastName, emailId, age }) => {

    const newUser = await userModel.create({ firstName, lastName, emailId, age })
    if (!newUser) {
        throw new Error("Couldn't create the user")
    }
    return newUser
}

const updateUser = async ({ id, age }) => {

    const user = await userModel.findByIdAndUpdate({ _id: id }, { age }, { returnDocument: 'after' })
    if (!user) {
        throw new Error("Couldn't update the user!!")
    }
    return user
}

export const userDomain = {
    createUser,
    updateUser
}