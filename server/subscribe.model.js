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
  static listAll() {
    return Subscriber.find({});
  }

  static async exists(email) {
    const subscriber = await Subscriber.findOne({ email });

    if (subscriber) {
      return true;
    }

    return false;
  }

  static async subscribe({ name, email }) {
    validateAgainstSchemaProps({ name, email }, SubscribersSchema);
    await new Subscriber({ name, email }).save();
  }
}

module.exports = SubscriberModel;
