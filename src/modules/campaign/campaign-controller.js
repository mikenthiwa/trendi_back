import models from '../../db/models';
import { Response } from '../../helpers/reponse';

export class CampaignController {
  static async getCampaigns(req, res) {
    try {
      const page = req.query.page || 1;
      const limit = req.query.limit || 10;
      const offset = (page - 1) * limit;
      const { count, rows } = await models.Campaign.findAndCountAll({
        limit,
        offset,
        include: [
          {
            model: models.User,
            as: 'brand',
            attributes: ['email', 'firstName', 'lastName'],
          },
          {
            model: models.CampaignGuideline,
            as: 'campaignGuideline',
            attributes: ['content'],
          },
          {
            model: models.CampaignSubmission,
            as: 'campaignSubmission',
            attributes: ['status'],
            include: [
              {
                model: models.User,
                as: 'influencer',
                attributes: ['firstName', 'lastName'],
              },
              {
                model: models.CampaignVideo,
                as: 'campaignVideo',
                attributes: ['title', 'videoUrls'],
              },
            ],
          },
        ],
      });
      return Response(res, 200, 'Success', rows, count);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async createCampaign(req, res) {
    try {
      const { title, userId, status, deadline, slug } = req.body;
      const campaign = await models.Campaign.create({
        title,
        userId,
        status,
        deadline,
        slug,
      });
      return Response(res, 201, 'Campaign created successfully', campaign);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
