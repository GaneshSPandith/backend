import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "15kb"}))

app.use(express.urlencoded({extended: true,limit: "15kb"}))

app.use(express.static("public"))

app.use(express.cookieParser())

const app = express()

export {app}