import { NextApiRequest, NextApiResponse } from 'next';
import { ServerError } from '~/server/ServerUtils';
import { withMiddlewares } from '~/server/Middlewares';
import SubmissionModel from '~/server/model/submissions.model';

export default withMiddlewares({
  GET: getSubmission,
  POST: updateSubmission,
  DELETE: deleteSubmission,
});

async function getSubmission(req: NextApiRequest, res: NextApiResponse) {
  const { submissionId } = req.query;

  const submission = await SubmissionModel.get(submissionId);

  if (!submission) {
    throw new ServerError(404, `No submission with id='${submissionId}' found`);
  } else {
    res.json(submission);
  }
}

async function updateSubmission(req: NextApiRequest, res: NextApiResponse) {
  const { submissionId } = req.query;

  const submission = await SubmissionModel.update(submissionId, req.body);
  res.json(submission);
}

async function deleteSubmission(req: NextApiRequest, res: NextApiResponse) {
  const { submissionId } = req.query;

  await SubmissionModel.delete(submissionId);
  res.status(200).end();
}
