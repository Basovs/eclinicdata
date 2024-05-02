import { useQuery } from '@tanstack/react-query'

import { amplifyClient } from '@/lib/amplify'

import { Container } from '../ui/container'

export default function TodoList() {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      amplifyClient.models.Todo.list({
        selectionSet: ['id', 'title', 'content'],
        sortDirection: 'DESC',
      }),
    select: data => data.data,
  })

  return (
    <div className="mx-auto w-96">
      <ul className="flex flex-col gap-4">
        {data?.map(({ id, title, content }) => (
          <li key={id}>
            <Container variant="violet">
              <p className="font-bold">{title}</p>
              <p className="pl-2">{content}</p>
            </Container>
          </li>
        ))}
      </ul>
    </div>
  )
}
