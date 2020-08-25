import { AddSurvey } from '../../../../domain/usecases/add-survey'

export interface AddSurveyRepository {
  add (account: AddSurvey.Params): Promise<void>
}
