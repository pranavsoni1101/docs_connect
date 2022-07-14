import Local from 'passport-local'
import { findUser, validatePassword } from './user'

export const localStrategy = new Local.Strategy( (email, password, done ) => {
  findUser({ email })
    .then((user) => {
      if (user && validatePassword(user, password)) {
        done(null, user)
      } else {
        done(new Error('Invalid email and password combination'))
      }
    })
    .catch((error) => {
      done(error)
    })
})
