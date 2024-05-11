/* eslint-disable prettier/prettier */
import { User } from '@prisma/client';
import cookieParser from 'cookie-parser';
import express, { Request, Response } from 'express';
const session = require('express-session');
const passport = require('passport');
import cors from 'cors';
import {prisma} from "./config/initialization"
import authRouter from "routes/auth.router"
import bodyParser from 'body-parser';
import cricketerRouter from './routes/cricker.router';

export const app = express();

// app.use(session({
//   secret: 'keyboard cat',
//   resave: true,
//   saveUninitialized: true,
// }))

app.use(cors())


// app.use(passport.initialize());
// app.use(passport.session());
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
//   credentials: true
// }));
//read cookies (needed for auth)
app.use("/auth",authRouter)
app.use("/cricketer",cricketerRouter)
// passport.serializeUser((user: User, done) => {
//   done(null, user);
// });

// passport.deserializeUser(async (id, done) => {
//   const user = await prisma.user.findUnique({ where: { id } });
//   done(null, user);
// });
app.get("/", (req, res) => {
  res.status(200).json({hello:"hello"});
})
app.get('/logout', (req, res) => {
req.session?.destroy((err)=>{
  console.log("logout-err:",err);
});
  res.redirect('/login');
});
