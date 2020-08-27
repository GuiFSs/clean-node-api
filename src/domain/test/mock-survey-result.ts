import { SurveyResultModel } from '../models/survey-result'
import { SaveSurveyResult } from '../usecases/survey-result/save-survey-result'

export const mockSurveyResultParams = (): SaveSurveyResult.Params => ({
  accountId: 'any_account_id',
  surveyId: 'any_survey_id',
  answer: 'any_answer',
  date: new Date()
})

export const mockSurveyResultModel = (): SurveyResultModel => ({
  ...mockSurveyResultParams(),
  id: 'any_id'
})
