import get from 'lodash/get';
import set from 'lodash/set';
import express, { Request, Response } from "express";
import { ServerError } from "../utils/ServerError";
import { PublicMiddleware } from "../Middlewares";
import Tidbit, { sanitizeTidbit } from "./tidbit.model";
import { API_TidbitI } from '../../shared/types/tidbit.types';

const tidbitRouter = express.Router();

tidbitRouter.get("/", [
  PublicMiddleware,
  async function getAllTidbits(req: Request, res: Response<Partial<API_TidbitI>[]>) {
    const queryParams = req.query;
    const acceptLanguage = req.headers['accept-language'] ?? 'en';
    const tidbits = await Tidbit.find({ language: acceptLanguage }).sort('-createdDate');
    const sanitizedTidbits = tidbits.map(sanitizeTidbit);

    if (queryParams.hasOwnProperty('field')) {
      // Adding the `fields` query param let's you choose which fields to populate
      // on each tidbit. Similar in a way to GraphQL
      // ?field=title&field=description
      // Available values are ones supported from Lodash `get()` function
      const stringFields: string[] = Array.isArray(queryParams.field)
        ? queryParams.field.map(f => f.toString())
        : [queryParams.field.toString()];

      const tidbitsWithFields: Partial<API_TidbitI>[] = sanitizedTidbits.map((tidbit) => {
        let newTidbit = {};
        stringFields.forEach((field: string) => {
          const fieldValue = get(tidbit, field);
          if (fieldValue !== undefined) {
            set(newTidbit, field, fieldValue);
          }
        });

        return newTidbit;
      });

      res.json(tidbitsWithFields);
      return;
    }

    res.json(sanitizedTidbits);
  },
]);

tidbitRouter.get("/:tidbitId", [
  PublicMiddleware,
  async function getTidbit(req: Request<{ tidbitId: string; }>, res: Response<API_TidbitI>) {
    const { tidbitId } = req.params;
    const acceptLanguage = req.headers['accept-language'] ?? 'en';
    const tidbit = await Tidbit.findOne({ tidbitId, language: acceptLanguage });

    if (tidbit === null) {
      new ServerError(404, 'generic.404').send(res);
      return;
    }

    res.json(sanitizeTidbit(tidbit));
  },
]);

tidbitRouter.get("/:currentTidbitId/sides", [
  PublicMiddleware,
  async function getPreviousAndNextTidbit(
    req: Request<{ currentTidbitId: string; }>,
    res: Response<{ previous: API_TidbitI | null | null, next: API_TidbitI | null }>
  ) {
    const { currentTidbitId } = req.params;
    const acceptLanguage = req.headers['accept-language'] ?? 'en';

    const tidbits = await Tidbit.find({ language: acceptLanguage }).sort("-createdDate");
    const indexOf = tidbits.findIndex(
      (tidbit) => tidbit.tidbitId === currentTidbitId
    );

    if (indexOf === -1) {
      new ServerError(404, 'generic.404', { currentTidbitId }).send(res);
      return;
    }

    res.json({
      previous: indexOf > 0 ? sanitizeTidbit(tidbits[indexOf - 1]) : null,
      next: indexOf < tidbits.length - 1 ? sanitizeTidbit(tidbits[indexOf +1]) : null,
    });
  },
]);

tidbitRouter.post('/:tidbitId/views', async function increaseViews(
  req: Request<{ tidbitId: string; }>,
  res: Response
) {
  const { tidbitId } = req.params;
  const acceptLanguage = req.headers['accept-language'] ?? 'en';

  const tidbit = await Tidbit.findOne({ tidbitId, language: acceptLanguage });

  if (tidbit === null) {
    new ServerError(404, 'generic.404').send(res);
    return;
  }

  tidbit.views += 1;

  try {
    await tidbit.save();
    res.status(200).send();
  } catch (err) {
    new ServerError(500, 'generic.500').send(res);
  }
});

export default tidbitRouter;
