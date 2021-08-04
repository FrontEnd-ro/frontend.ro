import {Request,Response} from 'express'
import  { ServerError } from '../ServerUtils';
import PresentationModel from './presentation.model';

export default class PresentationController{
  static async getAllPresentations(req:Request, res:Response) {
    const presentations = await PresentationModel.getAll();
    res.json(presentations);
  }

  static async getPresentation(req:Request, res:Response) {
    const { presentationId } = req.params;
    const presentation = await PresentationModel.get(presentationId);
  
    if (!presentation) {
      new ServerError(404, `Presentation with id=${presentationId} doesn't exist!`).send(res);
      return;
    }
  
    res.json(presentation);
  }


  static async increaseViews(req:Request, res:Response) {
    const { presentationId } = req.params;
  
    const presentation = await PresentationModel.get(presentationId);
  
    try {
      if (!presentation) {
        await PresentationModel.updateViews(presentationId, 1);
      } else {
        await PresentationModel.updateViews(presentationId, presentation.views + 1);
      }
  
      const updatedPresentation = await PresentationModel.get(presentationId);
      res.json(updatedPresentation);
    } catch (err) {
      new ServerError(
        err.code || 500, 
        err.message || 'Oops! A apărut o problemă. Încearcă din nou!'
      );
    }
  }
}