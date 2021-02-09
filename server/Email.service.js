const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.EMAIL_TOKEN);


function sendEmailWithTemplate(email, TemplateId, TemplateModel) {
  return client.sendEmailWithTemplate({
    To: process.env.APP_ENV === 'production' ? email : 'pava@frontend.ro',
    From: 'hello@frontend.ro',
    TemplateId,
    TemplateModel,
  }).catch(err => {
    console.error("[sendEmailWithTemplate]",  {
      email, 
      TemplateId, 
      TemplateModel
    }, err)
  })
}

module.exports = {
  sendEmailWithTemplate
}
