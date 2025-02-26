import CampaignRoute from './campaign';
import AuthRoute from './auth';
import UserRoute from './user';

const apiPrefix = '/api/v1';

const routes = [CampaignRoute, AuthRoute, UserRoute];

export default (app) => {
  routes.forEach((route) => {
    app.use(apiPrefix, route);
  });
  return routes;
};
