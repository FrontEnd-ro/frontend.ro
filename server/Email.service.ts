import  postmark from 'postmark';

const client = new postmark.ServerClient(process.env.EMAIL_TOKEN);


function sendEmailWithTemplate(email, TemplateId, TemplateModel) {
  const options = {
    To: process.env.APP_ENV === 'production' ? email : 'pava@frontend.ro',
    From: 'hello@frontend.ro',
    TemplateId,
    TemplateModel,
  }

  return client.sendEmailWithTemplate(options).catch(err => {
    console.error("[sendEmailWithTemplate]", options, err)
  })
}

function sendTemplateWithAlias(email, TemplateAlias, TemplateModel) {
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

export default {
  sendEmailWithTemplate,
  sendTemplateWithAlias,
}
