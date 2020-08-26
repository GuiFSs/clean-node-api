import { AddSurvey } from '@/domain/usecases/surveys/add-survey'

export interface AddSurveyRepository {
  add (account: AddSurvey.Params): Promise<void>
}
