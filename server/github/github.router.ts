
import express from 'express';
import { PrivateMiddleware } from '../Middlewares';
import GithubController from './github.controller'


const githubRouter = express.Router();

githubRouter.get("/user", PrivateMiddleware,GithubController.getLoggedInUser );

githubRouter.get("/callback", PrivateMiddleware, GithubController.gitHubAuth);



export default githubRouter;