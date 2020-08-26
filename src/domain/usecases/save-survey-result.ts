import { SurveyResultModel } from '../models/survey-result'

export interface SaveSurveyResult {
  add (data: SaveSurveyResult.Params): Promise<SurveyResultModel>
}

export namespace SaveSurveyResult {
  export type Params = Omit<SurveyResultModel, 'id'>
}
