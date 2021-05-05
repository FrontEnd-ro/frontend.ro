const mongoose = require('mongoose');

const PresentationSchema = new mongoose.Schema({
  presentationId: { type: String, required: true, unique: true },
  views: { type: Number, required: true },
  title: { type: String, required: true },
  thumb: { type: String, required: true },
  description: { type: String, required: true },
  created: { type: Number, required: true }
}, {
  timestamps: {
    updatedAt: 'updatedAt',
  },
});

const Presentation = mongoose.models.Presentation || mongoose.model('Presentation', PresentationSchema);

class PresentationModel {
  static get(presentationId) {
    return Presentation.findOne({ presentationId });
  }

  static getAll() {
    return Presentation.find({});
  }

  static async updateViews(presentationId, views) {
    let presentation = null;

    try {
      presentation = await PresentationModel.get(presentationId);
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

    return new Promise((resolve, reject) => {
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

module.exports = PresentationModel;