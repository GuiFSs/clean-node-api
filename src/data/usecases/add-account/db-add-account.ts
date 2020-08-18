import { Encrypter, AddAccount, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encrypter: Encrypter,
    private readonly addAccountRepository: AddAccountRepository
  ) {}

  async add (accountData: DbAddAccount.Params): Promise<DbAddAccount.Model> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    await this.addAccountRepository.add({
      ...accountData,
      password: hashedPassword
    })
    return null
  }
}

export namespace DbAddAccount {
  export type Params = AddAccount.Params
  export type Model = AddAccount.Model
}
