const errorMiddleware = (err, req, res, next) => {
  const status = err.status;
  const message = err.message;
  const extraDetails = err.extraDetails;

  return res.status(status).json({ message, extraDetails });
};

export default errorMiddleware;
