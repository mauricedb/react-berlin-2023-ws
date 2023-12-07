import 'server-only'

import { prisma } from '@/lib/db'

export async function ChildComponent() {
  console.log('Rendering Child Component')
  const movie = await prisma.movie.findFirstOrThrow()

  return (
    <main className="bg-red-400 p-12">
      <h2 className="my-6 text-4xl font-bold">Child Component</h2>
      <p>{movie.title}</p>
    </main>
  )
}
