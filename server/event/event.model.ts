import { Document } from "mongoose";
import { AttendeeSchema, Event, EventI } from "./event.schema";
import { EventAttendeeI } from "../../shared/types/event.types";
import { ServerError, validateAgainstSchemaProps } from '../ServerUtils';

class EventModel {
  static getByLabel(label: string) {
    return Event.findOne({ label });
  }

  static async addAttendee(label: string, attendee: EventAttendeeI): Promise<Document<any, any, EventI>> {
    const event = await EventModel.getByLabel(label);
    if (!event) {
      throw new ServerError(400, `Nu există evenimentul cu label=${label}`);
    }

    validateAgainstSchemaProps(attendee, AttendeeSchema);

    event.attendees.push(attendee);

    return new Promise((resolve, reject) => {
      event.save((err, data) => {
        if (err) {
          return reject(err);
        }

        resolve(data);
      });
    });
  }

  static async addToWaitlist(label: string, attendee: EventAttendeeI): Promise<Document<any, any, EventI>> {
    const event = await EventModel.getByLabel(label);

    if (!event) {
      throw new ServerError(400, `Nu există evenimentul cu label=${label}`);
    }

    validateAgainstSchemaProps(attendee, AttendeeSchema);

    event.waitlist.push(attendee);

    return new Promise((resolve, reject) => {
      event.save((err, data) => {
        if (err) {
          return reject(err);
        }

        resolve(data);
      });
    });
  }
}

export default EventModel;
