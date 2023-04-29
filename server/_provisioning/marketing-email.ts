require('dotenv').config();
import { connectToDb } from '../database';
import UserModel from '../user/user.model';
import EmailService, { EMAIL_TEMPLATE } from '../Email.service';
import SubscriberModel from '../subscribe.model';
import appConfig from '../config';

connectToDb()
  .then(main)
  .catch((err) => {
    console.error('[provision.connectToDb]', err);
    throw true;
  });

type EmailAndPayload = {
  email: string;
  payload: Record<string, any>;
}

const MESSAGE_STREAM = 'notifications';
async function main() {
  const SPAN = '[marketing-emails.main]';

  try {
    const users = await UserModel.search();
    const subscribers = await SubscriberModel.listAll();

    console.log(`${SPAN} Got ${users.length} users and ${subscribers.length} subscribers.`);

    const emailAndPayloads: EmailAndPayload[] = users.map((u) => ({
      email: u.email,
      payload: {
        name: u.name || u.username
      }
    }));

    subscribers
      // Filter subscribers that are already users
      .filter((s) => emailAndPayloads.find(v => v.email === s.email) === undefined)
      .forEach((s) => {
        emailAndPayloads.push({
          email: s.email,
          payload: {
            name: s.name
          }
        })
    });

    console.log(`${SPAN} Total unique emails=${emailAndPayloads.length}.`);
    console.log(`${SPAN} Here are the payloads`, emailAndPayloads);

    console.log(`App ENV: ${appConfig.APP.env}`);
    sendEmail(EMAIL_TEMPLATE.CHRISTMAS_ADVENT_2022, emailAndPayloads);

    console.log(`${SPAN} Done!`);
  } catch (err) {
    console.error('[marketing-emails.main]', err);
  }
}

async function sendEmail(
  templateAlias: EMAIL_TEMPLATE,
  emailToPayload: EmailAndPayload[]
) {
  const SPAN = `[sendEmail, templateAlias=${templateAlias}]`;

  const emailResponses = await Promise.all(
    emailToPayload.map(({email, payload}) => {
      return EmailService.sendTemplateWithAlias(email, templateAlias, payload, MESSAGE_STREAM)
    })
  );

  const successCount = emailResponses.filter(resp => resp.success === true).length;
  const failCount = emailResponses.filter(resp => resp.success === false).length;

  console.log(`${SPAN} Got ${successCount} success emails and ${failCount} failed`);

  if (failCount > 0) {
    const failedEmails = [];
    emailResponses.forEach((resp, index) => {
      if (resp.success === false) {
        failedEmails.push(emailToPayload[index].email);
      }
    })

    console.log(`${SPAN} Failed emails: ${failedEmails.join(';')}`);
  }
}
