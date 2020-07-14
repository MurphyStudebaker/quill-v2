import { db } from 'src/lib/db'

export const poems = () => {
  return db.poem.findMany()
}

export const poemsByUser = ({ id }) => {
  return db.poem.findMany({ where: { authorId: id } })
}

export const poem = ({ id }) => {
  return db.poem.findOne({
    where: { id },
  })
}

export const createPoem = ({ input }) => {
  return db.poem.create({
    data: {
      title: input.title,
      body: input.body,
      published: input.published,
      author: {
        connect: {
          id: input.authorId,
        },
      },
    },
  })
}

export const updatePoem = ({ input }) => {
  return db.poem.update({
    where: { id: input.id },
    data: input,
  })
}

export const deletePoem = ({ id }) => {
  return db.poem.delete({
    where: { id },
  })
}

export const Poem = {
  author: (_obj, { root }) =>
    db.poem.findOne({ where: { id: root.id } }).author(),
  categories: (_obj, { root }) =>
    db.poem.findOne({ where: { id: root.id } }).categories(),
}
