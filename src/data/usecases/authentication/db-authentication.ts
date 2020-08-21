import { Authentication } from '../../../domain/usecases/authentication'
import { LoadAccountByEmailRepository } from '../../protocols/load-accoun-by-email-repository'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) {}

  async auth (authentication: Authentication.Params): Promise<string> {
    await this.loadAccountByEmailRepository.load(authentication.email)
    return null
  }
}
