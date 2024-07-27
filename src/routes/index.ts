import express, { response } from "express"
import userRoutes from "./users/usersRoutes.js"
import bodyParser from "body-parser"


const router: express.Router = express.Router()

router
    .route('/')
    .get(async (req: any, res: any) => {
        res.send('Hello World')
    })

router.use(userRoutes)


export default router

