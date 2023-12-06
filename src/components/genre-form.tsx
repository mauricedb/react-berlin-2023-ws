'use client'

import { FormEventHandler } from 'react'

import { Genre } from '@prisma/client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type Props = {
  genre: Genre
}

export function GenreForm({ genre }: Props) {
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    console.group(`Saving Genre ${genre.id} ${genre.name}`)
    console.table(Array.from(formData))
    console.groupEnd()
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-1/2">
      <Card>
        <CardHeader>
          <CardTitle>Edit Movie Genre</CardTitle>
          <CardDescription>Change the name of the movie genre.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <Input name="id" defaultValue={genre.id} type="hidden" />
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Name of the movie genre"
                defaultValue={genre.name}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="reset" variant="destructive">
            Cancel
          </Button>
          <Button type="submit">Save Changes</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
