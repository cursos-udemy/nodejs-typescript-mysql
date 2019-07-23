import { Router, Request, Response } from 'express';
import MySQL from '../database/mysql';
import { MysqlError } from 'mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
    const query = `SELECT * FROM heroes`;
    MySQL.executeQuery(query, (err: string, results: Object[]): void => {
        if (err) {
            res.status(400).json({
                status: 'error',
                timestamp: new Date().getTime(),
                message: err
            });
            return;
        }
        console.info(results);
        res.json({
            status: 'ok',
            timestamp: new Date().getTime(),
            message: 'bienvenido a la home',
            results
        });
    });
});


router.get('/heroe/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const query = `SELECT * FROM heroes h WHERE h.id=${MySQL.escape(id)}`;
    MySQL.executeQuery(query, (err: string, results: Object[]): void => {
        if (err) {
            res.status(400).json({
                status: 'error',
                timestamp: new Date().getTime(),
                message: err
            });
            return;
        }
        console.info(results);
        res.json({
            status: 'ok',
            timestamp: new Date().getTime(),
            message: 'bienvenido a la home',
            heroe: results[0]
        });
    });

});


export default router;