import { SurveyAnswerModel } from '../../models/survey'

export interface AddSurvey {
  add (data: AddSurvey.Params): Promise<void>
}

export namespace AddSurvey {
  export interface Params {
    question: string
    answers: SurveyAnswerModel[]
    date: Date
  }
}
