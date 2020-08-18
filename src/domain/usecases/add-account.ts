import { AccountModel } from '../models'

export interface AddAccount {
  add (account: AddAccount.Params): AddAccount.Model
}

export namespace AddAccount {
  export interface Params {
    name: string
    email: string
    password: string
  }

  export type Model = AccountModel
}
