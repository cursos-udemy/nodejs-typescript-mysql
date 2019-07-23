import { Router, Request, Response } from 'express';

const router = Router();

router.get('/home', (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        timestamp: new Date().getTime(),
        message: 'bienvenido a la home'
    });
});

export default router;