import express from "express"
import { createServer, Server } from "http"
import routes from "../routes/index.js"
import bodyParser from "body-parser"


export class App {
    public port: number
    public host: string

    private app: express.Application
    private server: Server

    constructor(port = 8000, host = "localhost") {
        this.port = port
        this.host = host

        this.app = this.createApp()
        this.server = createServer(this.app)
    }

    private createApp(): express.Application {
        const app = express()
        app.use(bodyParser.json())
        app.use('/v1', routes)

        return app
    }

    public start(): void {
        this.server.listen(this.port, () => {
            console.log(`Running server on port ${this.port}`)
        })
    }
}


