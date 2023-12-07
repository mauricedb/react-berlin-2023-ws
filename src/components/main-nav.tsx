'use client'

import { ReactNode, Suspense } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { ChevronsUpDown, RotateCw } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useShoppingCart } from './shopping-cart'

type Props = {
  genreSelector: ReactNode
}

export function MainNav({ genreSelector }: Props) {
  const { itemCount, checkout } = useShoppingCart()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hasGenreParam = searchParams?.has('genre')

  const menuItem = [{ label: 'Movies', href: '/movies' }]

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="inline-block font-bold">React Day Berlin</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {menuItem.map((item) => {
          const active = pathname === item.href && !hasGenreParam

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn('transition-colors', {
                'text-foreground': active,
                'text-foreground/60 hover:text-foreground/80': !active,
              })}
            >
              {item.label}
            </Link>
          )
        })}

        <Suspense
          fallback={
            <Button
              variant="outline"
              className="w-[200px] justify-between text-foreground/60"
              disabled
            >
              Movies by genre...
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          }
        >
          {genreSelector}
        </Suspense>

        <Link
          href="/genres"
          className="text-foreground/60 transition-colors hover:text-foreground/80"
        >
          Genres
        </Link>

        <Link
          href="/server-or-client"
          className="text-foreground/60 transition-colors hover:text-foreground/80"
        >
          Server/Client
        </Link>

        <Button
          onClick={checkout}
          disabled={!itemCount}
          variant="default"
          className="text-sm"
        >
          Checkout
        </Button>
      </nav>
    </div>
  )
}
