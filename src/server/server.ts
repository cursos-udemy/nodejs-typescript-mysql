import express from 'express';


// class ServerBuilder {
//     static init (port: number) {
//         return new Server(port);
//     }
// }


export default class Server {

    private app: express.Application = express();
    private port: number = 3000;


    protected constructor(port: number) {
        this.port = port;
    }

    static init (port: number) {
        return new Server(port);
    }

    public start(callback: VoidFunction ) {

        this.app.listen(this.port, callback);
    }

    public getApp() {
        return this.app;
    }

    public getPort() {
        return this.port;
    }
}