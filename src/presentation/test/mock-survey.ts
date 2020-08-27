import { AddSurvey } from '@/domain/usecases/surveys/add-survey'
import { LoadSurveys } from '@/domain/usecases/surveys/load-surveys'
import { SurveyModel } from '@/domain/models/survey'
import { mockSurveysModel, mockSurveyModel } from '@/domain/test'
import { LoadSurveyById } from '@/domain/usecases/surveys/load-survey-by-id'

export const mockAddSurvey = (): AddSurvey => {
  class AddSurveyStub implements AddSurvey {
    async add (data: AddSurvey.Params): Promise<void> {}
  }
  return new AddSurveyStub()
}

export const mockLoadSurveys = (): LoadSurveys => {
  class LoadSurveysStub implements LoadSurveys {
    async load (): Promise<SurveyModel[]> {
      return mockSurveysModel()
    }
  }
  return new LoadSurveysStub()
}

export const mockLoadSurveyById = (): LoadSurveyById => {
  class LoadSurveyByIdStub implements LoadSurveyById {
    async loadById (id: string): Promise<SurveyModel> {
      return mockSurveyModel()
    }
  }
  return new LoadSurveyByIdStub()
}
