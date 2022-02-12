import  errorHandler  from '../../helpers/api/error-handler';
import  jwtMiddleware  from '../../helpers/api/jwt-middleware';

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
