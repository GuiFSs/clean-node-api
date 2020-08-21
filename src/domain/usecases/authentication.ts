export interface Authentication {
  auth (authentication: Authentication.Params): Promise<string>
}

export namespace Authentication {
  export interface Params {
    email: string
    password: string
  }
}
