# 🧾 Project Summary
This project implements a gRPC server in Node.js that provides full CRUD (Create, Read, Update, Delete) operations for user management. The service is built using the @grpc/grpc-js and
@grpc/proto-loader libraries, following modern gRPC practices in JavaScript.

## 🔧 Features
- ### ✅ Create User
    Add a new user with necessary details (e.g., name, email).
- ### 🔍 Find User by ID
    Retrieve a user's information by their unique identifier.
- ### 📝 Update User
    Update one or more fields of a user record (e.g., name, email, etc.).
- ### 🗑️ Delete User
    Remove a user from the data store using their ID.
- ### 📄 List All Users
    Fetch a list of all registered users.

## 🚀 Tech Stack
- Node.js
- gRPC (@grpc/grpc-js)
- Protocol Buffers
- Mongo db(mongoose)

## 📁 gRPC Service Definition
The service is defined in a .proto file and includes the following RPC methods:
```
service UserService {
    rpc CreateUser(CreateUserRequest) returns (User);
    rpc GetUserById(GetAndDeleteUserRequest) returns (User);
    rpc UpdateUser(UpdateUserRequest) returns (User);
    rpc GetUserList(ListUser) returns (ListUsersResponse);
    rpc DeleteUser(GetAndDeleteUserRequest) returns (DeleteUserResponse);
}
```
## 📚 Notes
- The service uses a modular structure with clear separation of concerns.
- Authentication and middleware (e.g., logging, rate limiting) can be integrated using gRPC interceptors.
- Easily extendable for persistent databases like MongoDB or PostgreSQL.
