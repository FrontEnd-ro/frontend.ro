const mongoose = require('mongoose');

const Banner = new mongoose.Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  cta: { type: String, required: false },
  ctaLink: { type: String, required: false }
})

const ApplicationConfigSchema = new mongoose.Schema({
  banner: { type: Banner, required: true },
})

const ApplicationConfig = mongoose.models.ApplicationConfig
  || mongoose.model('ApplicationConfig', ApplicationConfigSchema);


/**
 * For now there are no update methods here,
 * since we're changing values directly in the DB.
 * 
 * In the future we might grow this config to include 
 * other things that impact all users.
 */
class ApplicationConfigModel {
  static async get() {
    const config = await ApplicationConfig.findOne();
    return config || {};
  }
}

module.exports = ApplicationConfigModel;