import { ServerError } from '../ServerUtils'
import { Request, Response } from 'express'
// (req:Request, res:Response)


import  EventModel from './event.model';
import  EmailService from '../Email.service';


export default class EventController{

  static async getAvailableSeats(req:Request, res:Response) {
    const { label } = req.params;
  
    try {
      const eventInfo = await EventModel.getByLabel(label);
  
      if (!eventInfo) {
        new ServerError(404, `Nu există evenimentul cu label=${label}`).send(res);
        return
      }
  
      res.json({
        label,
        total: eventInfo.total,
        free: eventInfo.total - eventInfo.attendees.length
      });
    } catch (err) {
      console.error("[getAvailableSeats]", err);
      new ServerError(500, err.message || 'Oops! Se pare că nu am putut să te înregistrăm. Încearcă din nou.').send(res);
    }
  }

  static async registerToEvent(req:Request, res:Response) {
    const { label } = req.params;
    const { name, email, tel } = req.body;
  
    try {
      const eventInfo = await EventModel.getByLabel(label);
  
      if (!eventInfo) {
        new ServerError(404, `Nu există evenimentul cu label=${label}`).send(res);
        return
      }
  
      if (eventInfo.attendees.find(attendee => attendee.email === email || attendee.tel === tel)) {
        new ServerError(400, `Ești deja înregistrat la acest eveniment`).send(res);
        return
      }
  
      const freeSeatsCount = eventInfo.total - eventInfo.attendees.length;
  
      if (freeSeatsCount >= 1) {
        await EventModel.addAttendee(label, { name, email, tel });
  
        EmailService.sendTemplateWithAlias(
          email,
          `${label}-registered`,
          {
            name,
            sender_name: "Păvă",
            product_name: "Git & GitHub pentru începători",
          }
        );
        res.status(201).send();
      } else {
        new ServerError(400, `Nu mai sunt locuri la acest eveniment`).send(res);
        return
      }
    } catch (err) {
      console.error("[registerToEvent]", err);
      new ServerError(500, err.message || 'Oops! Se pare că nu am putut să te înregistrăm. Încearcă din nou.').send(res);
    }
  }

  static async addToWaitlist(req:Request, res:Response) {
    const { label } = req.params;
    const { name, email, tel } = req.body;
  
    try {
      const eventInfo = await EventModel.getByLabel(label);
  
      if (!eventInfo) {
        new ServerError(404, `Nu există evenimentul cu label=${label}`).send(res);
        return
      }
  
      if (eventInfo.attendees.find(attendee => attendee.email === email || attendee.tel === tel)) {
        new ServerError(400, `Ești deja înregistrat la acest eveniment`).send(res);
        return
      }
  
      if (eventInfo.waitlist.find(attendee => attendee.email === email || attendee.tel === tel)) {
        new ServerError(400, `Ești deja pe lista de așteptare a acestui eveniment`).send(res);
        return
      }
  
      await EventModel.addToWaitlist(label, { name, email, tel });
      EmailService.sendTemplateWithAlias(
        email,
        `${label}-waitlist`,
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
  }
}