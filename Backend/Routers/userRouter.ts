import { Router } from "express"
import { sendMessage } from "../Controllers/mailController"

const userRouter = Router()

userRouter.post("/sendMessage", sendMessage)

export default userRouter
