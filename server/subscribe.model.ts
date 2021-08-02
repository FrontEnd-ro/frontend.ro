import { Schema, model, models } from "mongoose";
import { SubscribersInterface } from "./types/type";
const uniqueValidator = require("mongoose-unique-validator");
const { validateAgainstSchemaProps } = require("./ServerUtils");

const SubscribersSchema = new Schema<SubscribersInterface>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

SubscribersSchema.plugin(uniqueValidator);

const Subscriber = models?.Subscriber || model("Subscriber", SubscribersSchema);

class SubscriberModel {
  static async exists(email) {
    const subscriber = await Subscriber.findOne({ email });

    if (subscriber) {
      return true;
    }

    return false;
  }

  static subscribe({ name, email }) {
    validateAgainstSchemaProps({ name, email }, SubscribersSchema);

    const subscriber = new Subscriber({ name, email });

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
