import dbConnect from '../../../lib/dbConnect';
const { model } = require('mongoose');

import apiHandler from '../../../helpers/api/api-handler';

export default apiHandler(handler);

async function handler(req, res) {
  const { method } = req;
  const User = model('User');

  await dbConnect();
  
  switch (method) {
    case 'GET':
      try {
        const user = await User.find({});
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
