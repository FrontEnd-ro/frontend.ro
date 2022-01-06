require('dotenv').config();
import { connectToDb } from '../database';
import LessonModel from '../lesson/lesson.model';
import Tutorial from '../tutorial/tutorial.model';
import { LessonI } from '../../shared/types/lesson.types';

connectToDb()
  .then(main)
  .catch((err) => {
    console.error('[provision.connectToDb]', err);
    throw true;
  });

async function main() {
  try {
    // await createTutorialFromLessons('html', [
    //   'despre-html',
    //   'structura-pagina-html',
    //   'validare',
    //   'texte',
    //   'linkuri-si-butoane',
    //   'liste',
    //   'containere',
    //   'imagini',
    //   'audio-video',
    //   'formulare'
    // ]);
    console.log("DONE");
  } catch (err) {
    console.error('provisioning.main', err);
  }
}

async function createTutorialFromLessons(name: string, lessonIds: string[]) {
  const lessons: LessonI[] = await Promise.all(lessonIds.map((lessonId) => {
    return LessonModel.get(lessonId);
  }))

  if (lessons.indexOf(null) !== -1) {
    throw new Error(`Lesson at index ${lessons.findIndex(null)} is null. Returning early.`);
  }

  const newTutorial = new Tutorial({
    name,
    lessons: lessons.map((lesson) => lesson._id.toString()),
  });

  newTutorial.save();
}

function createNewTutorial(name: string) {
  const newTutorial = new Tutorial({ name, lessons: [] });
  newTutorial.save();
}