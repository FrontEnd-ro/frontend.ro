import mongoose from 'mongoose';
import { EventAttendeeI } from '../../shared/types/event.types';

export interface EventI {
  label: string;
  total: number;
  attendees: EventAttendeeI[];
  waitlist: EventAttendeeI[];
}

const AttendeeSchema = new mongoose.Schema<EventAttendeeI>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: String, required: true }
})

const EventSchema = new mongoose.Schema<EventI>(
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

const Event: mongoose.Model<EventI> = mongoose.models.Event || mongoose.model('Event', EventSchema);
const Attendee: mongoose.Model<EventAttendeeI> = mongoose.models.Attendee || mongoose.model('Attendee', AttendeeSchema);

export { Event, EventSchema, Attendee, AttendeeSchema };
