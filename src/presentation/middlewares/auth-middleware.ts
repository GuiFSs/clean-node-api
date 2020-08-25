import { HttpRequest, Middleware, HttpResponse } from '../protocols'
import { forbidden } from '../helpers'
import { AccessDeniedError } from '../errors/access-denied-error'

export class AuthMiddleware implements Middleware {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return forbidden(new AccessDeniedError())
  }
}
