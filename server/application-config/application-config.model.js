const mongoose = require('mongoose');


/**
 * This controls whether or not we show an "ad"
 * card on the Landing Page.
 * 
 * It's usefull if we want to promote
 * the latest features, lessons, etc.
 */
const Ad = new mongoose.Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  cta: { type: String, required: false },
  ctaLink: { type: String, required: false }
})

const ApplicationConfigSchema = new mongoose.Schema({
  ad: { type: Ad, required: true },
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