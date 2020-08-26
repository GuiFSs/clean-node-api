export interface AddSurvey {
  add (data: AddSurvey.Params): Promise<void>
}

export namespace AddSurvey {
  export interface Params {
    question: string
    answers: SurveyAnswers[]
    date: Date
  }
}

export interface SurveyAnswers {
  image?: string
  answer: string
}
