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

const rpcGetUserById = async (call, callback) => {
    try {
        const { id } = call.request
        const user = await userDomain.getUserById({ id })
        callback(null, {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            emailId: user.emailId,
            age: user.age
        })
    } catch (error) {
        callback({ code: grpc.status.code, details: error.message })
    }
}

const rpcDeleteUser = async (call, callback) => {
    try {
        const { id } = call.request
        const isDeleted = await userDomain.deleteUser({ id })
        callback(null, { success: isDeleted })
    } catch (error) {
        callback({ code: grpc.status.code, details: error.message })
    }
}

const rpcGetUserList = async (call, callback) => {
    try {
        const users = await userDomain.getUserList()
        callback(null, { users })
    } catch (error) {
        callback({ code: grpc.status.code, details: error.message })
    }
}

export const rpcMethod = {
    rpcCreateUser,
    rpcUpdateUser,
    rpcGetUserById,
    rpcDeleteUser,
    rpcGetUserList
}           