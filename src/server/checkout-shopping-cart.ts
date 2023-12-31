'use server'

import { sleep } from '@/lib/utils'
import { Movie } from '@prisma/client'

type ShoppingCartMovie = Pick<Movie, 'id' | 'title'>

type Cart = {
  account: string
  customerName: string
  movies: ShoppingCartMovie[]
}

export async function checkoutShoppingCart({
  account,
  customerName,
  movies,
}: Cart) {
  await sleep(5000)

  const totalAmount = movies.length * 9.99
  console.group(`checkout for ${customerName}`)
  console.log(
    `Charging account '${account}' for ${totalAmount.toLocaleString('en', {
      style: 'currency',
      currency: 'EUR',
    })}`,
  )
  console.table(movies)
  console.groupEnd()
}
