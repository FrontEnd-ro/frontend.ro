import { Document } from "mongoose";
import { Presentation } from "./presentation.schema";
import { PresentationI } from "../../shared/types/presentation.types";

class PresentationModel {
  static async updateViews(presentationId: string, views: number): Promise<void> {
    let presentation: Document<any, any, PresentationI> & PresentationI | null = null;

    try {
      presentation = await Presentation.findOne({ presentationId });
    } catch (err) {
      console.error(`
        [PresentationModel.updateViews] got while fetching for presentationId=${presentationId}`,
        err
      );

      throw err;
    }

    if (!presentation) {
      presentation = new Presentation({ presentationId });
      console.log(`[PresentationModel.updateViews] created presentation on demand, with id=${presentationId}`);
    }

    presentation.views = views;

    return new Promise<void>((resolve, reject) => {
      presentation.save((err) => {
        if (err) {
          console.error(`
            [PresentationModel.updateViews] got while saving presentationId=${presentationId}`,
            err
          );

          reject(err);
          return;
        }

        resolve();
      });
    });
  }
}

export default PresentationModel;
