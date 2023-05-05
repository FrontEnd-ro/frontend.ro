import appConfig from 'config';
import { Response } from 'express';
import lodashGet from 'lodash/get';
import { MAX_MEDIA_MB } from '../../shared/SharedConstants';
import { MAX_DESCRIPTION_LENGTH, MAX_NAME_LENGTH, MAX_USERNAME_LENGTH } from '../ServerUtils';

type Join<S1, S2> = S1 extends string
  ? S2 extends string
    ? `${S1}.${S2}`
    : never
  : never;

export type Paths<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? Join<K, Paths<T[K]>>
    : K;
}[keyof T];

const MESSAGES = {
  en: {
    'exercises': {
      'not_found': "Exercise doesn't exist"
    },
    'database': {
      'invalid_schema': "Property doesn't respect the schema",
      'invalid_id': "The id is not a valid MongoDB object identifier"
    },
    'generic': {
      'wrong_role': "You don't have the necesary role for this resource",
      '401': "You're unauthorized to access this resource",
      '403': 'Forbidden',
      '404': "Resource not found",
      '500': "Something went wrong... If the problem persists get in touch with us and we'll fix it"
    },
    'challenges': {
      'missing_code': "Expected to receive a parameter named 'code' with type 'string'.",
      'edited_readonly_files': "You can only edit certain files for this task.",
      'edited_finished_task': "This task is already successfully finished. You cannot edit it.",
      'approve_finished_task': "Task with is already approved.",
    },
    'events': {
      'fully_booked': "This event is fully booked.",
      'already_registered': "You're already registered for this event.",
      'already_on_waitlist': "You're already on the waitlist for this event."
    },
    'github': {
      'not_connected': "User with isn't connected to GitHub"
    },
    'lesson-exercise': {
      'file_failed_upload': "File couldn't be uploaded. Try again!",
      'file_too_big': `The max dimension for a file is ${MAX_MEDIA_MB}MB`
    },
    'notifications': {
      'forbidden_mark_as_read': "This notification doesn't belong to you so you cannot mark it as read."
    },
    'password-reset': {
      'missing_email': "Email field is mandatory for resetting the password."
    },
    'admin-submission': {
      'can_only_approve_submitted_solutions': "You can only approve submissions that are awaiting feedback.",
      'can_only_give_feedback_submitted_solutions': "You can only give feedback to submissions that are awaiting feedback."
    },
    'submission': {
      'readonly_submission': 'Submission is awaiting feedback. Until then you cannot edit it.',
      'still_have_unresolved_feedback': "You still have unresolved feedbacks for this exercise.",
      'forbidden_to_read_versions': "Only admins or the owner of the submission can read it's versions."
    },
    'tutorial': {
      'already_started': "You already started the tutorial."
    },
    'user': {
      'login_email_username_required': 'Email/username and password are required for login.',
      'login_failed_user_missing': "There's no user with this email/username!",
      'login_failed_password_wrong': 'Password is wrong!',
      'register_required_fields': "Cannot regisrer without email, username and password!",
      "register_invalid_email": "Email is invalid",
      "register_invalid_username": "Username can only contain letters and digits!",
      "register_email_exists": "Did you forget you already registered with this email?",
      "name_cannot_be_empty": "Name cannot be empty",
      "name_too_big": `Are you an alien? Then how come you have a name longer than ${MAX_NAME_LENGTH} characters?`,
      "description_cannot_be_empty": "Description cannot be empty",
      "description_too_big": `Description can have maximum ${MAX_DESCRIPTION_LENGTH} characters.`,
      "email_cannot_be_empty": "Email cannot be empty",
      "change_email_in_use": "The new email is already in use.",
      "change_password_empty": "The new password cannot be empty",
      "wrong_credentials_for_profile_update": "The credentials do not match with your account.",
      "password_reset_user_missing": "There's no user with this email or username!",
      "invalid_reset_code": "The password reset code is invalid or has expired.",
      "avatar_too_big": `The max size of the avatar is ${MAX_MEDIA_MB}MB`
    },
    "username": {
      "username_length_requirement": `Username must be between 1 and ${MAX_USERNAME_LENGTH} characters long.`,
      "username_restricted": "This username is restricted, so you cannot use it."
    },
    "subscribe": {
      "bad_format": "Name and email must be strings.",
      "required_fields": "Your email and name are required!",
      "already_an_user": "You're already an so that means you're also subscribed to all our news.",
      "already_subscribed": "Hmm, are you trying to subscribe to our newsletter again...🤔"
    }
  },
  ro: {
    'exercises': {
      'not_found': "Exercițiul nu există"
    },
    'database': {
      'invalid_schema': 'Proprietatea nu respectă schema.',
      'invalid_id': "ID-ul nu este valid pentru documente MongoDB"
    },
    'generic': {
      'wrong_role': "Nu ai rolul necesar pentru a accesa această resursă",
      '401': "Nu ești autorizat să accesezi această resursă.",
      '403': 'Forbidden',
      '404': "Nu am găsit resursa căutată",
      '500': "A apărut o eroare. Dacă problema continuă dă-ne un semn și o vom rezolva."
    },
    'challenges': {
      'missing_code': "Body-ul trebuie să conțină un parametru numit 'code' de tipul 'string'.",
      'edited_readonly_files': "Poți edita doar anumite fișiere.",
      'edited_finished_task': "Acest task e deja completat cu succes. Nu-l mai poți modifica.",
      'approve_finished_task': "Taskul e deja aprobat.",
    },
    'events': {
      'already_registered': "Ești deja înregistrat la acest eveniment",
      'fully_booked': "Nu mai sunt locuri la acest eveniment",
      'already_on_waitlist': 'Ești deja pe lista de așteptare a acestui eveniment'
    },
    'github': {
      'not_connected': "Utilizatorul nu e conectat cu GitHub"
    },
    'lesson-exercise': {
      'file_failed_upload': "Fișierul nu a putut fi încărcat. Încearcă din nou!",
      'file_too_big': `Dimensiunea maximă a unui fișier este de ${MAX_MEDIA_MB}MB`
    },
    'notifications': {
      'forbidden_mark_as_read': "Notificarea nu-ți aparține, deci nu o poți marca ca și citită."
    },
    'password-reset': {
      'missing_email': "Email-ul este obligatoriu pentru a genera un cod de resetare de parolă."
    },
    'admin-submission': {
      'can_only_approve_submitted_solutions': "Poți aproba doar submisii ce așteaptă feedback-ul tău.",
      'can_only_give_feedback_submitted_solutions': "Poți da feedback doar la submisii ce așteaptă feedback-ul tău."
    },
    'submission': {
      'readonly_submission': 'Submisia așteaptă feedback. Până atunci nu o poți edita.',
      'still_have_unresolved_feedback': "Încă ai feedback-uri nerezolvate pentru acest exercițiu.",
      'forbidden_to_read_versions': 'Doar adminii sau owner-ul exercițiului poate să citească versiunile unei submisii.'
    },
    'tutorial': {
      'already_started': "Ai început deja tutorialul."
    },
    'user': {
      'login_email_username_required': 'Email-ul/username-ul și parola sunt obligatorii pentru login.',
      'login_failed_user_missing': 'Nu există nici un utilizator cu acest email/username!',
      'login_failed_password_wrong': 'Parola e greșită!',
      'register_required_fields': "Nu te poți înregistra fără email, username și parolă!",
      "register_invalid_email": "Email-ul nu este valid",
      "register_invalid_username": "Username-ul poate să conțină doar litere și cifre!",
      "register_email_exists": "Ai uitat că te-ai înregistrat cu acest email?",
      "name_cannot_be_empty": "Numele nu poate fi gol",
      "name_too_big": `Ești cumva extraterestru? Atunci cum de ai un nume mai lung de ${MAX_NAME_LENGTH} caractere`,
      "description_cannot_be_empty": "Descrierea nu poate fi goală",
      "description_too_big": `Descrierea poate avea maxim ${MAX_DESCRIPTION_LENGTH} caractere.`,
      "email_cannot_be_empty": "Email-ul nu poate fi gol",
      "change_email_in_use": "Noul email e deja folosit de alt user.",
      "change_password_empty": "Noua parolă nu poate fi goală",
      "wrong_credentials_for_profile_update": "Credențialele introduse nu se potrivesc cu contul tău",
      "password_reset_user_missing": "Nu există nici un utilizator cu acest email sau username!",
      "invalid_reset_code": "Codul pentru resetarea parolei nu este valid sau a expirat.",
      "avatar_too_big": `Dimensiunea maximă a unui fișier este de ${MAX_MEDIA_MB}MB`
    },
    "username": {
      "username_length_requirement": `Username-ul trebuie sa aiba intre 1 si ${MAX_USERNAME_LENGTH} caractere lungime`,
      "username_restricted": "Acest username e restricționat, deci nu-l poți folosi."
    },
    "subscribe": {
      "bad_format": "Email-ul și numele trebuie să fie stringuri.",
      "required_fields": "Email-ul și numele tău sunt obligatorii!",
      "already_an_user": "Ești deja înregistrat ca utilizator!",
      "already_subscribed": "Hmm, încerci să te abonezi încă o data...🤔"
    }
  }
}

export type TranslationKey = Paths<typeof MESSAGES.en>;

class ServerError extends Error {
  code: number;

  message: string;

  meta: Record<string, any>;

  constructor(code: number, translationKey: TranslationKey, meta: Record<string, any> = {}) {
    super();

    this.code = code;
    this.meta = meta;
    this.message = lodashGet(MESSAGES, `${appConfig.APP.language}.${translationKey}`, translationKey);
  }

  send(res: Response) {
    res.status(this.code);
    res.json({
      code: this.code,
      message: this.message,
      meta: this.meta
    });
  }
}

export { ServerError };
