import express from "express";
import postsRouter from "./routes/postsRoute.js";
const app = express()


const bodyMiddlware = express.json()

app.use(bodyMiddlware)
app.use('/posts', postsRouter)

app.listen(3003)