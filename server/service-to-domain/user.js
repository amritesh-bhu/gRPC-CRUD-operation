import { userDomain } from "../domain/user/index.js"
import grpc from "@grpc/grpc-js"

const rpcCreateUser = async (call, callback) => {
    try {
        const { firstName, lastName, emailId, age } = call.request
        const user = await userDomain.createUser({ firstName, lastName, emailId, age })
        callback(null, {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            emailId: user.emailId,
            age: user.age
        })
    } catch (error) {
        callback({ code: grpc.status.INTERNAL, details: error.message });
    }
}

const rpcUpdateUser = async (call, callback) => {
    try {
        const { id, age } = call.request
        const user = await userDomain.updateUser({ id, age })
        callback(null, {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            emailId: user.emailId,
            age: user.age
        })
    } catch (err) {
        callback({ code: grpc.status.INTERNAL, details: err.message })
    }
}

export const rpcMethod = {
    rpcCreateUser,
    rpcUpdateUser
}           