import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { amplifyClient } from '@/lib/amplify'

const formSchema = z.object({
  title: z.string(),
  content: z.string(),
})

type FormValues = z.infer<typeof formSchema>

const initialValues: FormValues = {
  title: '',
  content: '',
}

export default function CreateTodoForm() {
  const queryClient = useQueryClient()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  })

  const createTodo = useMutation({
    mutationFn: async (values: FormValues) => {
      await amplifyClient.models.Todo.create({
        title: values.title,
        content: values.content,
        is_done: false,
      })
    },
    onSettled: () => {
      form.reset(initialValues)
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleSubmit = async (values: FormValues) => {
    createTodo.mutate(values)
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4 w-full max-w-96 mx-auto"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input disabled={createTodo.isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Input disabled={createTodo.isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={createTodo.isPending}>
            Create Todo
          </Button>
        </form>
      </Form>
    </div>
  )
}
