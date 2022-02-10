import { errorHandler, jwtMiddleware } from 'helpers/api';

export default function apiHandler(handler) {
  return async (req, res) => {
    try {
      // global middleware
      await jwtMiddleware(req, res);

      // route handler
      await handler(req, res);
    } catch (error) {
      // global error handler
      errorHandler(error, res);
    }
  };
}
