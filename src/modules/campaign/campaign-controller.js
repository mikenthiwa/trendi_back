import Campaign from "../../db/models/campaign";

export class CampaignController {
    static async getCampaigns(req, res) {
        const campaigns = await Campaign.findAll();
        return campaigns;
    }
}