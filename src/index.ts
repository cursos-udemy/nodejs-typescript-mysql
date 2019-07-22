import Server from "./server/server";

const server = Server.init(3000);

server.start(() => {
    //if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${server.getPort()}`);
});