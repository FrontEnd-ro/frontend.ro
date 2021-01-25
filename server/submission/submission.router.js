const express = require('express');
const SubmissionModel = require('./submission.model');
const { PublicMiddleware, PrivateMiddleware } = require('../Middlewares');

const submissionRouter = express.Router();


submissionRouter.get('/', [PublicMiddleware], async function getSubmissions(req, res) {
  const { page, query } = req.query;
  const results = await SubmissionModel.search(+page, query);

  res.json(results);
});

submissionRouter.post('/', [PrivateMiddleware], async function createSubmission(req, res) {
  const submission = await SubmissionModel.create(req.body);
  res.json(submission);
});

submissionRouter.get('/:submissionId', async function getSubmission(req, res) {
  const { submissionId } = req.params;

  const submission = await SubmissionModel.get(submissionId);

  if (!submission) {
    throw new ServerError(404, `No submission with id='${submissionId}' found`);
  } else {
    res.json(submission);
  }
});

submissionRouter.post('/:submissionId', [PrivateMiddleware], async function updateSubmission(req, res) {
  const { submissionId } = req.query;

  const submission = await SubmissionModel.update(submissionId, req.body);
  res.json(submission);
})

submissionRouter.delete('/:submissionId', [PrivateMiddleware], async function deleteSubmission(req, res) {
  const { submissionId } = req.query;

  await SubmissionModel.delete(submissionId);
  res.status(200).end();
})

module.exports = submissionRouter;