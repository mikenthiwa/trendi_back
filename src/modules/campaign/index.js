import express from 'express';
import { CampaignController } from './campaign-controller';

const router = express.Router();

router.get('/brands', CampaignController.getCampaigns)

export default router;