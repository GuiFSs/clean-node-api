import { AddAccount } from '@/domain/usecases/account/add-account'

export interface AddAccountRepository {
  add (account: AddAccount.Params): Promise<AddAccount.Model>
}
