import { makeAddSurveyValidation } from './add-survey-validation-factory'
import { Validation } from '@/presentation/protocols/validation'
import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

jest.mock('@/validation/validators/validation-composite')

describe('LoginValidationFactory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeAddSurveyValidation()
    const validations: Validation[] = []
    const requiredFields = ['question', 'answers']
    for (const field of requiredFields) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
