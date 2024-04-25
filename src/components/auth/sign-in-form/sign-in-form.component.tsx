import { useSignIn } from '@clerk/clerk-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
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

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type FormValues = z.infer<typeof formSchema>

export default function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn()
  const navigate = useNavigate()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const handleSubmit = async (values: FormValues) => {
    if (!isLoaded) {
      return
    }

    try {
      const result = await signIn.create({
        identifier: values.email,
        password: values.password,
      })

      if (result.status === 'complete') {
        console.log(result)
        await setActive({ session: result.createdSessionId })
        navigate({ to: '/' })
      } else {
        /*Investigate why the sign-in hasn't completed */
        console.log(result)
      }
    } catch (err: any) {
      console.error('error', err.errors[0].longMessage)
    }
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Sign in</Button>
        </form>
      </Form>
    </div>
  )
}
