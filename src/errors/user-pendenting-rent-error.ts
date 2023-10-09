export class UserPendentingRentError extends Error {
  public readonly name = 'UserPendentingRentError'

  constructor() {
      super('User have a pendenting rent, impossible to remove user.')
  }
}