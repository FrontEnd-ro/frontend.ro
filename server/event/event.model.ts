/* eslint-disable camelcase */
import { Schema, model, models } from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
import { PAGE_SIZE, ServerError, validateAgainstSchemaProps } from '../ServerUtils';
import {AttendeeInterface,EventInterface} from '../types/type'

const AttendeeSchema = new Schema<AttendeeInterface>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: String, required: true }
})

const EventSchema = new Schema<EventInterface>(
  {
    label: { type: String, required: true, unique: true },
    total: { type: Number, required: true },
    attendees: [{ type: AttendeeSchema, required: true }],
    waitlist: [{ type: AttendeeSchema, required: true }]
  },
  {
    timestamps: {
      createdAt: 'submittedAt',
      updatedAt: 'updatedAt',
    },
  },
);

const Event = models.Event || model('Event', EventSchema);
const Attendee = models.Attendee || model('Attendee', AttendeeSchema);

class EventModel {
  static getByLabel(label) {
    return Event.findOne({ label: label });
  }

  static async addAttendee(label, attendee) {
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

  static async addToWaitlist(label, attendee) {
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