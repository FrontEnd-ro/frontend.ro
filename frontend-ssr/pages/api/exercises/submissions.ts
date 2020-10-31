import { NextApiRequest, NextApiResponse } from 'next';
import { withMiddlewares } from '~/server/Middlewares';
import SubmissionModel from '~/server/model/submissions.model';

export default withMiddlewares({
  GET: searchSubmissions,
  POST: createSubmission,
});

async function searchSubmissions(req: NextApiRequest, res: NextApiResponse) {
  const { page, query } = req.query;
  const results = await SubmissionModel.search(+page, query as string);

  res.json(results);
}

async function createSubmission(req: NextApiRequest, res: NextApiResponse) {
  const submission = await SubmissionModel.create(req.body);
  res.json(submission);
}
