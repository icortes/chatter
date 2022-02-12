import jwt from 'jsonwebtoken';
import getConfig from 'next/config';

import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

import apiHandler from '../../../helpers/api/api-handler';

const { serverRuntimeConfig } = getConfig();

export default apiHandler(handler);

async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      await dbConnect();
      return authenticate();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function authenticate() {
    const { email, password } = req.body;
    const user = User.find({ email, password });

    if (!user) throw 'Username or password is incorrect';

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.secret, {
      expiresIn: '7d',
    });

    // return basic user details and token
    return res.status(200).json({
      id: user.id,
      username: user.username,
      firstName: user.fistName,
      lastName: user.lastName,
      token,
    });
  }
}
