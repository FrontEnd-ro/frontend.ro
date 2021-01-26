import mongoose, { Document } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { validateAgainstSchemaProps } from '../database';

const SubscribersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

SubscribersSchema.plugin(uniqueValidator);

const Subscriber = mongoose.models?.Subscriber || mongoose.model('Subscriber', SubscribersSchema);

class SubscriberModel {
  static async exists(email: string) {
    const subscriber = await Subscriber.findOne({ email });

    if (subscriber) {
      return true;
    }

    return false;
  }

  static subscribe({ name, email }) {
    validateAgainstSchemaProps({ name, email }, SubscribersSchema);

    const subscriber: Document = new Subscriber({ name, email });

    return new Promise<void>((resolve, reject) => {
      subscriber.save((err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }
}

export default SubscriberModel;
