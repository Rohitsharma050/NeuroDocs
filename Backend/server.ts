import dotenv from "dotenv"
import express, { Application, Request, Response } from "express"
import cors from "cors"
import userRouter from "./Routers/userRouter"

dotenv.config()

const app: Application = express()

app.use(cors())
app.use(express.json())

const PORT: number = Number(process.env.PORT) || 5000

app.get("/", (req: Request, res: Response): void => {
  res.send("Backend is running")
})

app.use("/api", userRouter)

app.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`)
})
