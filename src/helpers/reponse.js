export const Response = (res, status, message, data, count) => {
  res.status(status).json({
    status,
    message,
    count,
    data,
  });
};
