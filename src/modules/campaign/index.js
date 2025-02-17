import express from 'express';
import { CampaignController } from './campaign-controller';

const router = express.Router();

router.get('/campaigns', CampaignController.getCampaigns)

export default router;