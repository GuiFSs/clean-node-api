import { Encrypter, AddAccount } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encrypter: Encrypter
  ) {}

  async add (account: AddAccount.Params): Promise<AddAccount.Model> {
    await this.encrypter.encrypt(account.password)
    return null
  }
}
