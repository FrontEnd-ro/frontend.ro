import express, { Request, Response } from "express";
import Tidbit from "./tidbit.model";
import { ServerError } from "../ServerUtils";
import { PublicMiddleware } from "../Middlewares";
import { TidbitI } from "../../shared/types/tidbit.types";

const tidbitRouter = express.Router();

tidbitRouter.get("/", [
  PublicMiddleware,
  async function getAllTidbits(req: Request, res: Response) {
    const tidbits: TidbitI[] = await Tidbit.find().sort('-createdDate');

    res.json(tidbits);
  },
]);

tidbitRouter.get("/:tidbitId", [
  PublicMiddleware,
  async function getTidbit(req: Request, res: Response) {
    const { tidbitId } = req.params;
    const tidbit: TidbitI = await Tidbit.findOne({ tidbitId });

    if (tidbit === null) {
      new ServerError(404, "Not found").send(res);
      return;
    }

    res.json(tidbit);
  },
]);

export default tidbitRouter;
