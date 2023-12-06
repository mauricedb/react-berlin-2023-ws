import { Genre } from '@prisma/client'

import { prisma } from '@/lib/db'

export async function saveGenre(genre: Genre) {
  await prisma.genre.update({
    data: genre,
    where: { id: genre.id },
  })
}
