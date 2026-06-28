import mongoose from 'mongoose';
import { ApplicationConfig } from '../../shared/types/application-config.types';

/**
 * Kept (read-only) for the archive: the navigation menu + optional landing-page
 * "ad" card are read from MongoDB so the header nav stays accurate without
 * hardcoding. The old Express write/admin paths are gone.
 */
const Ad = new mongoose.Schema<ApplicationConfig['ad']>({
  id: { type: String, required: true },
  text: { type: String, required: true },
  cta: { type: String, required: false },
  ctaLink: { type: String, required: false },
  active: { type: Boolean, required: true, default: true },
});

const NavItem = new mongoose.Schema<ApplicationConfig['navItems'][0]>({
  text: { type: String, required: true },
  href: { type: String, required: true },
  highlighted: { type: Boolean, required: false },
});

const ApplicationConfigSchema = new mongoose.Schema<ApplicationConfig>({
  ad: { type: Ad, required: true },
  navItems: [{ type: NavItem, required: false }],
});

const ApplicationConfigModel: mongoose.Model<ApplicationConfig> = mongoose.models.ApplicationConfig
  || mongoose.model<ApplicationConfig>('ApplicationConfig', ApplicationConfigSchema);

export { ApplicationConfigModel };
