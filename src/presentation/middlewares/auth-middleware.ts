import { LoadAccountByToken } from './../../domain/usecases/load-account-by-token'
import { HttpRequest, Middleware, HttpResponse } from '../protocols'
import { forbidden } from '../helpers'
import { AccessDeniedError } from '../errors/access-denied-error'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const accessToken = httpRequest.headers?.['x-access-token']
    if (accessToken) {
      await this.loadAccountByToken.load(accessToken)
    }
    return forbidden(new AccessDeniedError())
  }
}
