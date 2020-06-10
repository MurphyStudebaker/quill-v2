import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const User = {
  poems: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).poems(),
  profile: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).profile(),
}
