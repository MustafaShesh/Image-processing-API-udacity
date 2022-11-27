import express from 'express';
import sharp from 'sharp';
import path from 'path';

const routes = express.Router();

// define local directory for images
const importImages: unknown = './images/full';
const exportImages: unknown = './images/thumb';

// define a route handler for the image processing
routes.get('/images', async (req, res) => {
  const { width, height }: any = req.query;
  const imageName: unknown = req.query.filename;
  const thumbImageName: any = `/${imageName}_${width}_${height}`;
  const originalImgPath: string = path.join(__dirname, `.${importImages}`, `/${imageName}.jpg`);
  const thumbImgPath: string = path.join(__dirname, `.${exportImages}`, `${thumbImageName}.jpg`);

  try {
    // check if the image exists in the thumb directory
    if (thumbImageName.thumbImgPath == thumbImgPath) {
      res.sendFile(thumbImgPath);
    } else {
      const result = await sharp(originalImgPath)
        .resize({ width: +width, height: +height })
        .toFile(thumbImgPath);
      res.sendFile(thumbImgPath);
    }
  } catch (error) {
    // throw an error when any of the parameters is wrongly entered
    if (width <= 0 || height <= 0) {
      console.log(`Image parameters is wrong! Try positve value`);
      res.send(`Image parameters is wrong! Try positve value`);
    } else if (width == null || height == null || imageName == '') {
      console.log(`Image parameters is missing! Try entring the value`);
      res.send(`Image parameters is missing! Try entring the value`);
    } else {
      console.log(`There is no image names ${imageName}`);
      res.send(`There is no image names ${imageName}`);
    }
  }
});

export default routes;

