import { userDomain } from "../domain/user"

const rpcCreateUser = async (call, callback) => {
    try {
        const { firstName, lastName, emailId, age } = call.request
        const user = await userDomain.createUser({ firstName, lastName, emailId, age })
        callback(null, user)
    } catch (error) {
        throw new Error(err.message)
    }
}