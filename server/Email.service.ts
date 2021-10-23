const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.EMAIL_TOKEN);


function sendTemplateWithAlias(
  email: string,
  TemplateAlias: string,
  TemplateModel: Record<string, any>
) {
  const options = {
    To: process.env.APP_ENV === 'production' ? email : 'pava@frontend.ro',
    From: 'hello@frontend.ro',
    TemplateAlias,
    TemplateModel,
  }

  return client.sendEmailWithTemplate(options).catch(err => {
    console.error("[sendEmailWithTemplate]", options, err)
  })
}

module.exports = {
  sendTemplateWithAlias,
}
