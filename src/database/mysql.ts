//const mysql = require('mysql');
import mysql from 'mysql';


export default class MySQL {
    private static _instance: MySQL;
    private connection: mysql.Connection;

    private constructor() {
        console.log('mySQL constructor!');
        this.connection = mysql.createConnection({
            host: '192.168.0.201',
            user: 'jendrix-app',
            password: 'jendrix',
            database: 'jendrix-app-db'
        });

        this.connect();
    }

    private connect(): void {
        this.connection.connect((err: mysql.MysqlError) => {
            if (err) return console.error('Connection database [OK]', err.message);
            console.info('Connection database [OK]');
        });
    }

    public static get instance(): MySQL {
        return this._instance || (this._instance = new this());
    }

    public static executeQuery(query: string, callback: Function): any {
        this.instance.connection.query(query, (err: mysql.MysqlError, results: Object[], fields: string[]) => {
            if (err) {
                console.error('Error al ejecutar el query', err.message);
                return callback('Error al ejecutar el query');
            }
            callback(null, results);
        });
    }

    public static escape(id: any): string {
        return mysql.escape(id)
    }

}




// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });

//connection.end();