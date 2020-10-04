import { db } from 'src/lib/db'

export const sponsors = () => {
  return db.sponsor.findMany()
}

export const sponsor = ({ id }) => {
  return db.sponsor.findOne({
    where: { id },
  })
}

export const createSponsor = ({ input }) => {
  return db.sponsor.create({
    data: input,
  })
}

export const updateSponsor = ({ id, input }) => {
  return db.sponsor.update({
    data: input,
    where: { id },
  })
}

export const deleteSponsor = ({ id }) => {
  return db.sponsor.delete({
    where: { id },
  })
}
