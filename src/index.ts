import express, {Request, Response, Application} from "express"
import dotenv from "dotenv"

const app: Application = express()


app.get('/', (_req: Request, res: Response) => {
    res.send("Express & Typescript")
})


app.get('/test', (req: Request, res: Response) => {
    res.json({
        msg: "Msg Here",
        ...req.query
    })
})

app.listen(process.env.PORT || 3000)