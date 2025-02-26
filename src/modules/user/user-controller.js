import models from '../../db/models';
import { Response } from '../../helpers/reponse';
import { Webhook } from 'svix';
import dotenv from 'dotenv';

dotenv.config();

export class UserController {
  static async createUser(req, res) {
    const WEBHOOK_SECRET = process.env.WH_SIGNING_SECRET;
    if (!WEBHOOK_SECRET) {
      throw new Error('You need a WEBHOOK_SECRET in your .env');
    }

    const wh = new Webhook(WEBHOOK_SECRET);

    const headers = req.headers;
    const payload = req.body;

    const svix_id = headers['svix-id'];
    const svix_timestamp = headers['svix-timestamp'];
    const svix_signature = headers['svix-signature'];

    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response('Error occured -- no svix headers', {
        status: 400,
      });
    }

    const body = JSON.stringify(payload);

    try {
      const evt = wh.verify(body, {
        'svix-id': svix_id,
        'svix-timestamp': svix_timestamp,
        'svix-signature': svix_signature,
      });

      const { ...attributes } = evt.data;
      // Handle the webhooks
      const eventType = evt.type;
      if (eventType === 'user.created') {
        await models.User.create({
          email: attributes.email_addresses[0].email_address,
          firstName: attributes.first_name,
          lastName: attributes.last_name,
          role: 'influencer',
        });
        return Response(res, 201, 'User created successfully');
      }
    } catch (error) {
      console.log('error', error);
      return res.status(500).json({ message: error.message });
    }
  }
}
