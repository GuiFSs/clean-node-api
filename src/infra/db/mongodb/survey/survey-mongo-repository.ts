import { AddSurvey } from '@/domain/usecases/surveys/add-survey'
import { SurveyModel } from '@/domain/models/survey'
import { AddSurveyRepository } from '@/data/protocols/db/survey/add-survey-repository'
import { LoadSurveysRepository } from '@/data/protocols/db/survey/load-surveys-repository'
import { MongoHelper } from '../helpers/mongo-helper'
import { LoadSurveyByIdRepository } from '@/data/protocols/db/survey/load-survey-by-id-repository'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository, LoadSurveyByIdRepository {
  async add (surveyData: AddSurvey.Params): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll (): Promise<SurveyModel[]> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const surveys = await surveyCollection.find<SurveyModel>().toArray()
    return MongoHelper.mapCollection(surveys)
  }

  async loadById (id: string): Promise<SurveyModel> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const survey = await surveyCollection.findOne({ _id: id })
    return survey && MongoHelper.map<SurveyModel>(survey)
  }
}
