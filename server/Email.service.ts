import { ServerClient, TemplatedMessage } from 'postmark';
import appConfig from './config';

const client = new ServerClient(appConfig.EMAIL.token);

export enum EMAIL_TEMPLATE {
  NOTIFICATION = 'notification',
  REGISTER = 'register',
  PASSWORD_RESET = 'password-reset',
  AWARDED_CERTIFICATION = 'awarded-certification',
  CHRISTMAS_ADVENT_2022 = 'christmas-advent-2022',

  // To be deprecated and replaced with generic event templates
  GIT_INCEPATORI_INFO = 'git-incepatori-info',
  GIT_INCEPATORI_REGISTERED = 'git-incepatori-registered',
  GIT_INCEPATORI_WAITLIST = 'git-incepatori-waitlist',
}

/**
 * In most cases sending the Email is not a critical
 * action for the flow (meaning, if the email fails
 * to send, it's not a big problem).
 *
 * An example of this is the register flow where the critical
 * actions are actually adding the user inside the DB.
 *
 * Thus, we built this function to not throw errors. In most cases
 * we just call it and ignore whether or not it actually worked.
 * However, there are situations when the email is critical, for
 * example the password reset flow. So, even if it never throws,
 * this function will return a "success: boolean" to signify
 * if it actually worked or not.
 */
async function sendTemplateWithAlias(
  email: string,
  TemplateAlias: EMAIL_TEMPLATE,
  TemplateModel: Record<string, any>,
  MessageStream?: string,
) {
  const options: TemplatedMessage = {
    To: appConfig.APP.env === 'production' ? email : 'pava@frontend.ro',
    From: 'hello@frontend.ro',
    TemplateAlias,
    TemplateModel,
    MessageStream,
  }

  try {
    const response = await client.sendEmailWithTemplate(options);

    if (response.ErrorCode) {
      console.error("[sendEmailWithTemplate]", options, response);
      return {
        success: false,
        ErrorCode: response.ErrorCode,
        Message: response.Message,
      };
    }

    return {
      success: true
    };
  } catch (err) {
    // Critical error: under normal circumstances it shouldn't get here.
    console.error("[sendEmailWithTemplate]", options, err);
    return {
      success: false,
      ErrorCode: 500,
      Message: err.message
    }
  }
}

export default {
  sendTemplateWithAlias,
}
