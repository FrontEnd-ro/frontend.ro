import { NextApiRequest, NextApiResponse } from 'next';
import * as postmark from 'postmark';
import { withMiddlewares } from '~/server/Middlewares';
import SubscribeModel from '~/server/model/subscribe.model';
import { ServerError } from '~/server/ServerUtils';

export default withMiddlewares({
  POST: subscribe,
});

async function subscribe(req: NextApiRequest, res: NextApiResponse) {
  const { name, email } = req.body;

  if (!name || !email) {
    throw new ServerError(400, 'Email-ul și numele tău sunt obligatorii!');
  }

  const alreadySubscribed = await SubscribeModel.exists(email);
  if (alreadySubscribed) {
    throw new ServerError(400, 'Hmm, încerci să te abonezi încă o data...🤔');
  }

  await SubscribeModel.subscribe({ name, email });

  if (process.env.NODE_ENV === 'production') {
    try {
      const client = new postmark.ServerClient(process.env.EMAIL_TOKEN);

      await client.sendEmailWithTemplate({
        To: email,
        From: 'hello@frontend.ro',
        TemplateId: Number(process.env.EMAIL_WELCOME_TEMPLATE),
        TemplateModel: {
          name,
          sender_name: 'Păvă',
        },
      });
    } catch (err) {
      console.error('[sendEmailWithTemplate]', err, { name, email });
    }
  }

  res.json({
    name,
    email,
  });
}
