import express from 'express';
import sharp from 'sharp';
import path from 'path';

const routes = express.Router();

const importImages = './images/full';   // note the removal of the trailing '/'
const exportImages = './images/thumb';

// define a route handler for the image processing
routes.get('/images', async (req, res) => {
  const { width, height }: any = req.query;
  const imageName = `/${req.query.filename}`;
  try {
    const result = await sharp(path.join(__dirname, `.${importImages}`, `${imageName}.jpg`))
      .resize({ width: +width, height: +height })
      .toFile(path.join(__dirname, `.${exportImages}`, `${imageName}_thumb.jpg`));
    res.sendFile(path.join(__dirname, `.${exportImages}`, `${imageName}_thumb.jpg`));
  } catch (err) {
    res.send(404);
  }
});

export default routes;