import express from 'express';
import path from 'path';


// class ServerBuilder {
//     static init (port: number) {
//         return new Server(port);
//     }
// }


export default class Server {

    private app: express.Application = express();
    private port: number = 3000;


    private constructor(port: number) {
        this.port = port;
    }

    static init(port: number): Server {
        return new Server(port);
    }

    private publicFolder(): void {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }

    public start(callback: VoidFunction): void {
        this.publicFolder();
        this.app.listen(this.port, callback);
    }

    public getApp(): express.Application {
        return this.app;
    }

    public getPort(): number {
        return this.port;
    }
}