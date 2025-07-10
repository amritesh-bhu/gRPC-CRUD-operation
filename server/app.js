import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";


const packageDefinition = protoLoader.loadSync('/home/amritesh/workspace/gRPC-todo/server/proto/user.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const usersProto = grpc.loadPackageDefinition(packageDefinition).users;

const server = new grpc.Server();
server.addService(usersProto.UserService.service,{

})

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.log("Unable to start the server!", err);
    } else {
        console.log(`Server is listenming on port ${port}`);
        server.start();

    }
})
