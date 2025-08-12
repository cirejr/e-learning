export const logging = (req, res, next) => {
  const { url, method } = req;
  console.log(`[${method}] - "${url}"`);
  next();
};
