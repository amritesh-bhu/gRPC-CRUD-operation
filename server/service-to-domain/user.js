import { userDomain } from "../domain/user/index.js"
import grpc from "@grpc/grpc-js"

const rpcCreateUser = async (call, callback) => {
    try {
        console.log(call.request)
        const { firstName, lastName, emailId, age } = call.request
        const user = await userDomain.createUser({ firstName, lastName, emailId, age })
        console.log(user)
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

export const rpcMethod = {
    rpcCreateUser
}           