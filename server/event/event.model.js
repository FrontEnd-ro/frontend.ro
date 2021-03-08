/* eslint-disable camelcase */
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { PAGE_SIZE, ServerError, validateAgainstSchemaProps } = require('../ServerUtils');

const AttendeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: String, required: true }
})

const EventSchema = new mongoose.Schema(
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

const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);
const Attendee = mongoose.models.Attendee || mongoose.model('Attendee', AttendeeSchema);

class EventModel {
  static getByLabel(label) {
    return Event.findOne({ label: label });
  }

  static async addAttendee(label, attendee) {
    const event = await EventModel.getByLabel(label);
    if (!event) {
      throw new ServerError(400, `Nu există evenimentul cu label=${label}`);
    }

    console.log("add ", label, attendee);

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

module.exports = EventModel;