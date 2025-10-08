export const randomUnitsSold = () => Math.floor(Math.random() * 100) + 1;

export const createColorVariants = (color, hex, storages, imagePath) => {
  return storages.map(({ storage, price }) => ({
    color,
    hex,
    storage,
    price,
    image: imagePath,
    unitsSold: randomUnitsSold(),
  }));
};

export const createVariant = (color, hex, storage, price, imagePath) => ({
  color,
  hex,
  storage,
  price,
  image: imagePath,
  unitsSold: randomUnitsSold(),
});


export const createPhone = (title, brand, releaseDate, variants) => ({
  title,
  brand,
  releaseDate,
  variants,
});