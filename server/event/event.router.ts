import  express from 'express';
import EventController from './event.controller'

const eventRouter = express.Router();

eventRouter.get('/:label/seats',EventController.getAvailableSeats);

eventRouter.post('/:label/register',EventController.registerToEvent);

eventRouter.post('/:label/waitlist',EventController.addToWaitlist);

export default eventRouter;