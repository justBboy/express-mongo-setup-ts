import * as express from "express";
import createApp from "./config/app";
import { connectDb } from "./config/mongoose";

let app: express.Application;

connectDb();

app = createApp();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started: \t http://localhost:${port}`);
});
