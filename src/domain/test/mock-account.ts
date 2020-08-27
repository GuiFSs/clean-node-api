import { AccountModel } from '../models/account'
import { AddAccount } from '../usecases/account/add-account'
import { Authentication } from '../usecases/account/authentication'

export const mockAuthenticationParams = (): Authentication.Params => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAddAccountParams = (): AddAccount.Params => ({
  ...mockAuthenticationParams(),
  name: 'any_name'
})

export const mockAccountModel = (): AccountModel => ({
  ...mockAddAccountParams(),
  id: 'any_id'
})
