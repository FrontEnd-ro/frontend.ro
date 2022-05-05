require('dotenv').config();

const { connectToDb } = require('../database');
import EmailService, { EMAIL_TEMPLATE } from '../Email.service';
const EventModel = require('../event/event.model');



const trainingId = "git-incepatori-2";


connectToDb()
  .catch(err => {
    console.error('[connectToDB]', err);
    throw true;
  })
  .then(() => {
    console.log("✔ Connected to DB");
    EventModel
      .getByLabel('git-incepatori')
      .then(resp => {
        const { waitlist } = resp;

        Promise
          .all(waitlist.map(person =>
            EmailService.sendTemplateWithAlias(
              person.email,
              EMAIL_TEMPLATE.GIT_INCEPATORI_INFO,
              {
                name: person.name,
                sender_name: "Păvă",
                product_name: "Git & GitHub pentru începători",
              }
            ))
          ).then(() => { console.log("Done!") });
      })
  });
