import { Record } from 'sb-immutable'


export const UserStatsRecord = Record({
  orders: 0,
  queue: 0,
  reviews: 0,
  ratedFragrances: 0,
})

export const UserRecord = Record({
  id: null,
  firstName: 'Scentbird',
  lastName: null,
  email: null,
  avatar: null,
  birthday: null,
  gender: 'female',
  registrationDate: null,
  gaClientUid: null,
  mixpanelClientUid: null,
  stats: new UserStatsRecord,
})

export class User extends UserRecord {

  getFullName() {
    const firstName = this.firstName || ''
    const lastName = this.lastName || ''

    if (firstName && lastName) {
      return `${firstName} ${lastName}`
    }

    if (!firstName && !lastName) {
      return `Scentbird Account`
    }

    return firstName || lastName
  }
}
