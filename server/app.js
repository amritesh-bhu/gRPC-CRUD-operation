import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import { HTTP_PORT, MONGO_URI } from "./.secrets/env.js";
import { dbConn } from "./config/db-connection.js";


await dbConn(MONGO_URI)

const packageDefinition = protoLoader.loadSync('/home/amritesh/workspace/gRPC-todo/server/proto/user.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const usersProto = grpc.loadPackageDefinition(packageDefinition).users;

const server = new grpc.Server();
server.addService(usersProto.UserService.service, {

})

server.bindAsync(`0.0.0.0:${HTTP_PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.log("Unable to start the server!", err);
    } else {
        console.log(`Server is listenming on port ${port}`);
        server.start();

    }
})
