import  { PublicMiddleware, PrivateMiddleware, SolvableExercise, UserRoleMiddleware } from '../Middlewares';
import  { UserRole } from '../../shared/SharedConstants';
import express from 'express';
import SubmissionController from './submissions.controller';
const submissionRouter = express.Router();


submissionRouter.get('/', [PublicMiddleware], SubmissionController.getSubmissions);

submissionRouter.get('/:submissionId', SubmissionController.getSubmission);

submissionRouter.get('/exercise/:exerciseId', [PrivateMiddleware, SolvableExercise],  SubmissionController.getSubmissionByExercise);

submissionRouter.get('/:username/:exerciseId', 
[UserRoleMiddleware(UserRole.ADMIN), SolvableExercise], SubmissionController.getUserSubmission );

submissionRouter.post('/', [PrivateMiddleware],  SubmissionController.createSubmission);

submissionRouter.post('/:submissionId/approve', [UserRoleMiddleware(UserRole.ADMIN)], SubmissionController.approveSubmission);

submissionRouter.post('/:submissionId/feedback', [UserRoleMiddleware(UserRole.ADMIN)],  SubmissionController.approveSubmissionFeedback);

submissionRouter.put('/:submissionId', [PrivateMiddleware], SubmissionController.updateSubmission);

submissionRouter.post('/exercise/:exerciseId', [PrivateMiddleware, SolvableExercise], SubmissionController.submitSolution);

submissionRouter.delete('/feedback/:feedbackId', [PrivateMiddleware],  SubmissionController.markFeedbackAsDone)

submissionRouter.delete('/:submissionId', [PrivateMiddleware], SubmissionController.deleteSubmission )

export default submissionRouter;