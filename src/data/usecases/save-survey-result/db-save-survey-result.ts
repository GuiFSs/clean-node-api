import { SaveSurveyResult } from '@/domain/usecases/save-survey-result'
import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResultRepository } from '@/data/protocols/db/survey/save-survey-result-repository'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (
    private readonly saveSurveyResultRepository: SaveSurveyResultRepository
  ) {}

  async save (data: SaveSurveyResult.Params): Promise<SurveyResultModel> {
    await this.saveSurveyResultRepository.save(data)
    return null
  }
}
