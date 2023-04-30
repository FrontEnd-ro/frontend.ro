import { Document } from "mongoose";
import { ServerError } from "../utils/ServerError";
import { AttendeeSchema, Event, EventI } from "./event.schema";
import { EventAttendeeI } from "../../shared/types/event.types";
import { validateAgainstSchemaProps } from '../ServerUtils';

class EventModel {
  static getByLabel(label: string) {
    return Event.findOne({ label });
  }

  static async addAttendee(label: string, attendee: EventAttendeeI): Promise<Document<any, any, EventI>> {
    const event = await EventModel.getByLabel(label);
    if (!event) {
      throw new ServerError(404, 'generic.404', { label });
    }

    validateAgainstSchemaProps(attendee, AttendeeSchema);

    event.attendees.push(attendee);
    return event.save();
  }

  static async addToWaitlist(label: string, attendee: EventAttendeeI): Promise<Document<any, any, EventI>> {
    const event = await EventModel.getByLabel(label);

    if (!event) {
      throw new ServerError(404, 'generic.404', { label });
    }

    validateAgainstSchemaProps(attendee, AttendeeSchema);

    event.waitlist.push(attendee);
    return event.save();
  }
}

export default EventModel;
