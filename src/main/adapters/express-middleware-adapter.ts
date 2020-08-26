import { HttpRequest, Middleware } from '@/presentation/protocols'
import { Request, Response, NextFunction } from 'express'

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      headers: req.headers
    }
    const { statusCode, body } = await middleware.handle(httpRequest)
    if (statusCode === 200) {
      req = {
        ...req,
        ...body
      }
      next()
    } else {
      res.status(statusCode).json({
        error: body.message
      })
    }
  }
}
