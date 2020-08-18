import { DbAddAccount } from './db-add-account'
import { Encrypter } from '../../protocols/encrypter'

describe('DbAddAccount Usecase', () => {
  test('Should call Encrypter with correct password', async () => {
    class EncryptStub implements Encrypter {
      async encrypt (value: string): Promise<string> {
        return Promise.resolve('hashed_password')
      }
    }

    const encryptStub = new EncryptStub()
    const sut = new DbAddAccount(encryptStub)
    const encryptSpy = jest.spyOn(encryptStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith(accountData.password)
  })
})
