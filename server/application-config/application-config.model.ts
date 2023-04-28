import { ApplicationConfig } from './application-config.schema'
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

export { ApplicationConfigModel };
