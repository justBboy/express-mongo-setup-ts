import * as express from "express";
import * as cors from "cors";
import routes from "../routes";

const createApp = () => {
  const app = express();

  app.use(express.json({ limit: "50mb" }));
  app.use(cors());

  // routes
  routes(app);
  return app;
};

export default createApp;
