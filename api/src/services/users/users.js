import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findOne({
    where: { id },
  })
}

export const User = {
  poems: (_obj, { root }) => {
    db.user
      .findOne({
        where: {
          id: root.id,
        },
      })
      .poems()
  },
  profile: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).profile(),
}

export const createUser = ({ input }) => {
  return db.user.create({ data: input })
}

export const updateUser = ({ input }) => {
  return db.user.update({ where: { id: input.id }, data: { name: input.name } })
}
