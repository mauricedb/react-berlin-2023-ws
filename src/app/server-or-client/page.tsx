import { ChildComponent } from './child-component'
import { ParentComponent } from './parent-component'

export default function ServerOrClientPage() {
  console.log('Rendering Server Or Client Page')

  return (
    <main className="bg-blue-400 p-12">
      <h1 className="my-6 text-4xl font-bold">Server Or Client Page</h1>
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
    </main>
  )
}
