import { AccountModel } from '../models/account'

export interface AddAccount {
  add (account: AddAccount.Params): Promise<AddAccount.Model>
}

export namespace AddAccount {
  export interface Params {
    name: string
    email: string
    password: string
  }

  export type Model = AccountModel
}
