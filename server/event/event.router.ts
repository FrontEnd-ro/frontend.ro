import express, { Request, Response } from 'express';
import EventModel from './event.model';
import { ServerError } from '../utils/ServerError';
import EmailService, { EMAIL_TEMPLATE } from '../Email.service';

const eventRouter = express.Router();

eventRouter.get('/:label/seats', async function getAvailableSeats(
  req: Request<{ label: string; }>,
  res: Response<{ label: string; total: number; free: number; }>
) {
  const { label } = req.params;

  try {
    const eventInfo = await EventModel.getByLabel(label);

    if (!eventInfo) {
      new ServerError(404, 'generic.404', { label }).send(res);
      return
    }

    res.json({
      label,
      total: eventInfo.total,
      free: eventInfo.total - eventInfo.attendees.length
    });
  } catch (err) {
    console.error("[getAvailableSeats]", err);
    new ServerError(500, 'generic.500').send(res);
  }
});

eventRouter.post('/:label/register', async function registerToEvent(
  req: Request<{ label: string; }, {}, { name: string; email: string; tel: string; }>,
  res: Response
) {
  const { label } = req.params;
  const { name, email, tel } = req.body;

  try {
    const eventInfo = await EventModel.getByLabel(label);

    if (!eventInfo) {
      new ServerError(404, 'generic.404', { label }).send(res);
      return
    }

    if (eventInfo.attendees.find(attendee => attendee.email === email || attendee.tel === tel)) {
      new ServerError(400, 'events.already_registered').send(res);
      return
    }

    const freeSeatsCount = eventInfo.total - eventInfo.attendees.length;

    if (freeSeatsCount >= 1) {
      await EventModel.addAttendee(label, { name, email, tel });

      // No "await" here since the email is not
      // critical for the continuation of the flow.
      EmailService.sendTemplateWithAlias(
        email,
        EMAIL_TEMPLATE.GIT_INCEPATORI_REGISTERED,
        {
          name,
          sender_name: "Păvă",
          product_name: "Git & GitHub pentru începători",
        }
      );
      res.status(201).send();
    } else {
      new ServerError(400, 'events.fully_booked').send(res);
      return
    }
  } catch (err) {
    console.error("[registerToEvent]", err);
    new ServerError(500, err.message || 'Oops! Se pare că nu am putut să te înregistrăm. Încearcă din nou.').send(res);
  }
});

eventRouter.post('/:label/waitlist', async function addToWaitlist(
  req: Request<{ label: string; }, {}, { name: string; email: string; tel: string; }>,
  res: Response
) {
  const { label } = req.params;
  const { name, email, tel } = req.body;

  try {
    const eventInfo = await EventModel.getByLabel(label);

    if (!eventInfo) {
      new ServerError(404, 'generic.404', { label }).send(res);
      return
    }

    if (eventInfo.attendees.find(attendee => attendee.email === email || attendee.tel === tel)) {
      new ServerError(400, 'events.already_registered').send(res);
      return
    }

    if (eventInfo.waitlist.find(attendee => attendee.email === email || attendee.tel === tel)) {
      new ServerError(400, 'events.already_on_waitlist').send(res);
      return
    }

    await EventModel.addToWaitlist(label, { name, email, tel });

    // No "await" here since the email is not
    // critical for the continuation of the flow.
    EmailService.sendTemplateWithAlias(
      email,
      EMAIL_TEMPLATE.GIT_INCEPATORI_WAITLIST,
      {
        name,
        sender_name: "Păvă",
        product_name: "Git & GitHub pentru începători",
      }
    );
    res.status(200).send()
  } catch (err) {
    console.error("[addToWaitlist]", err);
    new ServerError(500, err.message || 'Oops! Se pare că nu am putut să te adaugăm pe lista de așteptare. Încearcă din nou.').send(res);
  }
});

export default eventRouter;
