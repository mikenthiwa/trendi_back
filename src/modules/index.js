import CampaignRoute from './campaign';
const apiPrefix = '/api/v1';

const routes = [CampaignRoute];

export default (app) => {
  routes.forEach((route) => {
    app.use(apiPrefix, route);
  });
  return routes;
};
