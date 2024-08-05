import express from "express"
import userRoutes from "./users/usersRoutes.js"


const router: express.Router = express.Router()

router
    .route('/')
    .get(async (req: any, res: any) => {
        res.send('API v1')
    })

router.use(userRoutes)


export default router

