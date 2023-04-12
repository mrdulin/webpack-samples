function importAll(images) {
  images.keys().forEach((image) => {
    console.log(image);
  });
}

const images = require.context("./assets/icon", true, /\.svg$/);
importAll(images);
