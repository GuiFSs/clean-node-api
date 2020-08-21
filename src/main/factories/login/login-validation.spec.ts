import { makeLoginValidation } from './login-validation'
import { EmailValidator } from '../../../presentation/protocols/email-validator'
import { Validation } from '../../../presentation/protocols/validation'
import { RequiredFieldValidation } from '../../../presentation/helpers/validators/required-field-validation'
import { EmailValidation } from '../../../presentation/helpers/validators/email-validation'
import { ValidationComposite } from '../../../presentation/helpers/validators/validation-composite'

jest.mock('../../../presentation/helpers/validators/validation-composite')

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

describe('LoginValidationFactory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeLoginValidation()
    const validations: Validation[] = []
    const requiredFields = ['email', 'password']
    for (const field of requiredFields) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new EmailValidation('email', makeEmailValidator()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
