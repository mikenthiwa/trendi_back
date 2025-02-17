const apiPrefix = '/api/v1';

const routes = [];

export default (app) => {
  routes.forEach((route) => {
    app.use(apiPrefix, route);
  });
  return routes;
};
