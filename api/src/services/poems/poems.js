import { db } from 'src/lib/db'

export const poems = () => {
  return db.poem.findMany()
}

export const Poem = {
  user: (_obj, { root }) => db.poem.findOne({ where: { id: root.id } }).user(),
  categories: (_obj, { root }) =>
    db.poem.findOne({ where: { id: root.id } }).categories(),
}
