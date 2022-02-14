import { NextFunction, Request, Response } from 'express';

const requiresUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.headers.authorization?.substring(7, req.headers.authorization?.length);

  if (!user || user !== 'thisIsAnExampleBearerTokenForAuth') {
    return res.sendStatus(401);
  }
  return next();
};

export default requiresUser;
