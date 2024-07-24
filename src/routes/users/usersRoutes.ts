import express from "express"
import Controller from "../../controller/index"
import { Request, Response } from "express"
import "../../db/connection"
import db from "../../db"
import { users } from "../../db/schema/users"

const userRoutes: express.Router = express.Router()
const controller = new Controller()

userRoutes
    .route('/users')
    .get(async (req: Request, res: Response) => {
        return res.send("Users")
    })

userRoutes
    .route('/users')
    .post(async (req: Request, res: Response) => {
        const user = await db.insert(users).values(req.body)
        return res.status(201).json(user)
    });
export default userRoutes

