import Server from "./server/server";
import router from "./server/router";
import MySQL from "./database/mysql";

const server = Server.init(3000);

server.getApp().use(router);

const mysql: MySQL = MySQL.instance;

server.start((): void => {
    //if (err) throw new Error(err);
    console.log(`Express Server liten on port ${server.getPort()}`);
});