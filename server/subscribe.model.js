const mongoose = require('mongoose');
const { validateAgainstSchemaProps } = require('./ServerUtils');

const SubscribersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, {
  timestamps: {
    updatedAt: 'updatedAt',
  },
});

const Subscriber = mongoose.models?.Subscriber || mongoose.model('Subscriber', SubscribersSchema);

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

    return new Promise((resolve, reject) => {
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

module.exports = SubscriberModel;
