 import express, { type Application, type Request, type Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send("Express + TypeScript + ESM Server running");
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
}).on("error", (error) => {
    throw new Error(error.message)
})