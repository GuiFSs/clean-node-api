import { HttpRequest, HttpResponse, Controller, AddAccount, EmailValidator } from './signup-protocols'
import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest, serverError, ok } from '../../helpers'

export class SignUpController implements Controller {
  constructor (
    private readonly emailValidator: EmailValidator,
    private readonly addAccount: AddAccount
  ) {}

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const { body } = httpRequest
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { password, passwordConfirmation, email, name } = body
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      const account = this.addAccount.add({
        email,
        name,
        password
      })
      return ok(account)
    } catch (error) {
      return serverError()
    }
  }
}
