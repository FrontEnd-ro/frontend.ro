import mongoose from 'mongoose';

const SubscribersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, {
  timestamps: {
    updatedAt: 'updatedAt',
  },
});

const Subscriber: mongoose.Model<{ name: string; email: string; }> = mongoose.models?.Subscriber
  || mongoose.model('Subscriber', SubscribersSchema);

export { Subscriber };
