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

const getUserById = async ({ id }) => {

    const user = await userModel.findOne({ _id: id })
    if (!user) {
        throw new Error('There is no user found for this id!!')
    }

    return user
}

const deleteUser = async ({ id }) => {
    const user = await userModel.findByIdAndDelete({ _id: id })
    if (!user) {
        return false
    }
    return true
}

const getUserList = async () => {
    const users = await userModel.find()
    if (users.length == 0) {
        throw new Error('There is no user found in your database!!!')
    }
    return users
}

export const userDomain = {
    createUser,
    updateUser,
    getUserById,
    deleteUser,
    getUserList
}