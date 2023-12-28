import { Router, Request, Response } from 'express';

const router = Router();

router.get('/endpoint', (req: Request, res: Response) => {
   res.json({ message: 'It Works!' });
});

export default router;
