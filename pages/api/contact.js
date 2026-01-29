import { contactService } from '@/backend/services/contactService';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await contactService.sendMessage(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
