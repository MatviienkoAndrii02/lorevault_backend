import express, { response } from "express"
import Controller from "../controller/index"
import userRoutes from "./users/usersRoutes"
const router: express.Router = express.Router()
const controller = new Controller()

router
    .route('/')
    .get(controller.get)
router.use(userRoutes)

export default router

