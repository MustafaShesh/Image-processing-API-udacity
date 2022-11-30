import express from 'express';
import imageProcess from '../utilities/imageProcessing';

const routes = express.Router();

// define a route handler for the image processing
routes.get('/images', imageProcess, (req, res): void => {
  imageProcess;
});

export default routes;
