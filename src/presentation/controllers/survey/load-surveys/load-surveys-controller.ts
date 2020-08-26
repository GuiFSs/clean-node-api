import { Controller, HttpResponse, HttpRequest, LoadSurveys } from './load-surveys-controller-protocols'
import { ok } from '../../../helpers'

export class LoadSurveysController implements Controller {
  constructor (
    private readonly loadSurveys: LoadSurveys
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const surveys = await this.loadSurveys.load()
    return ok(surveys)
  }
}
