import mongoose from 'mongoose';
import { ApplicationConfig } from '../../shared/types/application-config.types';

/**
 * This controls whether or not we show an "ad"
 * card on the Landing Page.
 * 
 * It's usefull if we want to promote
 * the latest features, lessons, etc.
 */
const Ad = new mongoose.Schema<ApplicationConfig['ad']>({
  id: { type: String, required: true },
  text: { type: String, required: true },
  cta: { type: String, required: false },
  ctaLink: { type: String, required: false }
});

/**
 * This defines main navigation menu links
 */
const NavItem = new mongoose.Schema<ApplicationConfig['navItems'][0]>({
  text: { type: String, required: true },
  href: { type: String, required: true },

  // Whether or not to highlight this in a way that
  // draws attention and signifies it's important for users.
  highlighted: { type: Boolean, required: false },
});

const ApplicationConfigSchema = new mongoose.Schema<ApplicationConfig>({
  ad: { type: Ad, required: true },
  navItems: [{ type: NavItem, required: false }],
});

const ApplicationConfigModel: mongoose.Model<ApplicationConfig> = mongoose.models.ApplicationConfig
  || mongoose.model<ApplicationConfig>('ApplicationConfig', ApplicationConfigSchema);;

export { ApplicationConfigModel };
