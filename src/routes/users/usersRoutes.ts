import express from "express"
import { Request, Response } from "express"
import db from "../../db/index.js"
import { users } from "../../db/schema/users.js"
import { eq } from "drizzle-orm";

const userRoutes: express.Router = express.Router()

// #region Get all users
userRoutes
    .route('/')
    .get(async (req: Request, res: Response) => {
        const allUsers = await db.select().from(users)
        return res.status(200).json(allUsers)
    })

// #region Get user by id
userRoutes
    .route('/id/:userId')
    .get(async (req: Request, res: Response) => {
        const userId: number = Number(req.params.userId)
        const user = await db.select().from(users).where(eq(users.id, userId))
        return res.status(200).json(user)
    })

// #region Create user
userRoutes
    .route('/')
    .post(async (req: any, res: any) => {
        const user = await db.insert(users).values(req.body).returning()
        return res.status(201).json(user)
    });

// #region Delete user
userRoutes.
    route('/:userId')
    .delete(async (req: Request, res: any) => {
        const userId: number = Number(req.params.userId)
        const user = await db.delete(users).where(eq(users.id, userId)).returning()
        return res.status(200).json(user)
    })

// #region Update user
// userRoutes.
//     route('/:userId')
//     .put(async (req: Request, res: any) => {
//         const userId: number = Number(req.params.userId)
//         const user = await db.delete(users).where(eq(users.id, userId)).returning()
//         return res.status(200).json(user)
//     })


userRoutes.use('/users', userRoutes)

export default userRoutes


