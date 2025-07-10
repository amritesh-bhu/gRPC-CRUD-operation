import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    age: {
        type: Number
    }
})


const userModel = mongoose.model("user", userSchema)

const createUser = async ({ firstName, lastName, emailId, age }) => {
    try {
        const newUser = await userModel.create({ firstName, lastName, emailId, age })
        if (!newUser) {
            throw new Error("Couldn't create the user")
        }
        return newUser
    } catch (error) {
        throw new Error(error.message)
    }
}

