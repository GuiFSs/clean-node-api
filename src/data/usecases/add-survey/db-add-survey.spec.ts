import { DbAddSurvey } from './db-add-survey'
import { AddSurvey, AddSurveyRepository } from './db-add-survey-protocols'

const makeFakeSurveyData = (): AddSurvey.Params => ({
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_answer'
  }]
})

const makeAddSurveyRepository = (): AddSurvey => {
  class AddSurveyRepositoryStub implements AddSurveyRepository {
    async add (account: AddSurvey.Params): Promise<void> {
    }
  }
  return new AddSurveyRepositoryStub()
}

describe('DbAddSurvey Usecase', () => {
  test('Should call AddSurveyRepository with correct values', async () => {
    const addSurveyRepositoryStub = makeAddSurveyRepository()
    const addSpy = jest.spyOn(addSurveyRepositoryStub, 'add')
    const sut = new DbAddSurvey(addSurveyRepositoryStub)
    const surveyData = makeFakeSurveyData()
    await sut.add(surveyData)
    expect(addSpy).toHaveBeenCalledWith(surveyData)
  })
})
