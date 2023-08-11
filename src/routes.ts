import { Router, Request, Response } from 'express';

const router = Router();

router.get('/endpoint', (req: Request, res: Response) => {
   res.json({ message: 'This is an endpoint!' });
});

export default router;
