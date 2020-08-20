import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { badRequest } from '../../helpers'
import { MissingParamError } from '../../errors'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return badRequest(new MissingParamError('email'))
  }
}
