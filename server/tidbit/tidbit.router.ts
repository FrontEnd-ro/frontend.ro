import express, { Request, Response } from "express";
import { ServerError } from "../ServerUtils";
import { PublicMiddleware } from "../Middlewares";
import Tidbit, { sanitizeTidbit } from "./tidbit.model";

const tidbitRouter = express.Router();

tidbitRouter.get("/", [
  PublicMiddleware,
  async function getAllTidbits(req: Request, res: Response) {
    const tidbits = await Tidbit.find().sort('-createdDate');

    res.json(tidbits.map(sanitizeTidbit));
  },
]);

tidbitRouter.get("/:tidbitId", [
  PublicMiddleware,
  async function getTidbit(req: Request, res: Response) {
    const { tidbitId } = req.params;
    const tidbit = await Tidbit.findOne({ tidbitId });

    if (tidbit === null) {
      new ServerError(404, "Not found").send(res);
      return;
    }

    res.json(sanitizeTidbit(tidbit));
  },
]);

tidbitRouter.get("/:currentTidbitId/sides", [
  PublicMiddleware,
  async function getPreviousAndNextTidbit(req: Request, res: Response) {
    const { currentTidbitId } = req.params;

    const tidbits = await Tidbit.find().sort("-createdDate");
    const indexOf = tidbits.findIndex(
      (tidbit) => tidbit.tidbitId === currentTidbitId
    );

    if (indexOf === -1) {
      new ServerError(404, `Tidbit with id=${currentTidbitId} not found.`).send(res);
      return;
    }

    res.json({
      previous: indexOf > 0 ? sanitizeTidbit(tidbits[indexOf - 1]) : null,
      next: indexOf < tidbits.length - 1 ? sanitizeTidbit(tidbits[indexOf +1]) : null,
    });
  },
]);

tidbitRouter.post('/:tidbitId/views', async function increaseViews(req, res) {
  const { tidbitId } = req.params;

  const tidbit = await Tidbit.findOne({ tidbitId });

  if (tidbit === null) {
    new ServerError(404, "Not found").send(res);
    return;
  }

  tidbit.views += 1;

  try {
    await tidbit.save();
    res.status(200).send();
  } catch (err) {
    new ServerError(
      err.code || 500, 
      err.message || 'Oops! A apărut o problemă. Încearcă din nou!'
    ).send(res);
  }
});

export default tidbitRouter;
