import express from "express"
import { Request, Response } from "express"
import db from "../../db/index.js"
import { users } from "../../db/schema/users.js"
import { eq } from "drizzle-orm";
import { CreateUserRequest, UpdateUserRequest } from "./types.js"

const userRoutes: express.Router = express.Router()

// #region Create user
userRoutes
    .route('/')
    .post(async (req: Request, res: Response) => {

        try {
            CreateUserRequest.parse(req.body)
        } catch (err) {
            return res.status(400).json({ message: err
            });
        };

        const user = await db.insert(users).values(req.body).returning().catch((err: any) => {
            res.status(400).json({ message: err.message })
        });
        return res.status(201).json(user)
    });


// #region Get user
userRoutes
    .route('/:userId')
    .get(async (req: Request, res: Response) => {
        const userId: number = Number(req.params.userId)

        if (!userId) {
            const allUsers = await db.select().from(users)
            return res.status(200).json(allUsers)
        };

        const user = await db.select().from(users).where(eq(users.id, userId))

        if (user.length === 0) {
            return res.status(404).json({ message: "User not found" })
        }

        return res.status(200).json(user)
    })
// #endregion

// #region Update user
userRoutes.
    route('/:userId')
    .put(async (req: Request, res: Response) => {
        const userId: number = Number(req.params.userId)

        if (!userId) {
            return res.status(400).json({ message: "Invalid user id" })
        }

        try {
            const parsed = UpdateUserRequest.parse(req.body)
            if (Object.keys(parsed).length === 0) {
                return res.status(400).json({ message: "No valid fields to update" })
            }
        } catch (err) {
            return res.status(400).json({ message: err
            });
        };

        const user = await db.update(users).set(req.body).where(eq(users.id, userId)).returning()

        if (user.length === 0) {
            return res.status(404).json({ message: "User not found" })
        }

        return res.status(200).json(user)
    })
// #endregion

// #region Delete user
userRoutes.
    route('/:userId')
    .delete(async (req: Request, res: Response) => {
        const userId: number = Number(req.params.userId)

        if (!userId) {
            return res.status(400).json({ message: "Invalid user id" })
        }

        const user = await db.delete(users).where(eq(users.id, userId)).returning()
        
        console.log(user)
        if (user.length === 0) {
            return res.status(404).json({ message: "User not found" })
        }

        return res.status(200).json(user)
    })
// #endregion

userRoutes.use('/users', userRoutes)

export default userRoutes


