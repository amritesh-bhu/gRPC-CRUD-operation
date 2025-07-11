import grpc from "@grpc/grpc-js"
import protoLoader from "@grpc/proto-loader"

const PROTO_PATH = '/home/amritesh/workspace/gRPC-todo/server/proto/user.proto'

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
})

const usersProto = grpc.loadPackageDefinition(packageDefinition).users

const client = new usersProto.UserService('localhost:50051', grpc.credentials.createInsecure())

client.CreateUser({ firstName: "Anshuman", lastName: "Bhaskar", emailId: "anshuman@gmail.com", age: 26 }, (error, response) => {
    if (error) {
        console.error('Error in creating User', error);
        return;
    }
    console.log('item created', response)
})