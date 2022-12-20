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
});

/**
 * This defines navigation links that are shown
 * inside <AsideMenu>.
 */
const NavItem = new mongoose.Schema({
  text: { type: String, required: true },
  href: { type: String, required: true },

  // Whether or not to highlight this in a way that
  // draws attention and signifies it's important for users.
  highlighted: { type: Boolean, required: false },
});

const ApplicationConfigSchema = new mongoose.Schema({
  ad: { type: Ad, required: true },
  navItems: [{ type: NavItem, required: false }],
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