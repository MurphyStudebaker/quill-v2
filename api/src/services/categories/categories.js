import { db } from 'src/lib/db'

export const categories = () => {
  return db.category.findMany()
}

export const Category = {
  poems: (_obj, { root }) =>
    db.category.findOne({ where: { id: root.id } }).poems(),
}
