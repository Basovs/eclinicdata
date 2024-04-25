import { useSignUp } from '@clerk/clerk-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const submitFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

const verifyFormSchema = z.object({
  code: z.string().min(6),
})

export default function SignUpForm() {
  const [pendingVerification, setPendingVerification] = useState(false)

  const { isLoaded, signUp, setActive } = useSignUp()
  const navigate = useNavigate()

  const submitForm = useForm<z.infer<typeof submitFormSchema>>({
    resolver: zodResolver(submitFormSchema),
  })

  const handleSubmit = async (values: z.infer<typeof submitFormSchema>) => {
    console.log('11 - VALUES from Submit', values)

    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress: values.email,
        password: values.password,
      })

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // change the UI to our pending section.
      setPendingVerification(true)
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  const verifyForm = useForm<z.infer<typeof verifyFormSchema>>({
    resolver: zodResolver(verifyFormSchema),
  })

  const handleVerify = async (values: z.infer<typeof verifyFormSchema>) => {
    console.log('22 - VALUES from Verify', values)

    if (!isLoaded) {
      return
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: values.code,
      })
      if (completeSignUp.status !== 'complete') {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2))
      }
      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId })
        navigate({ to: '/' })
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <div>
      {!pendingVerification && (
        <Form {...submitForm}>
          <form
            onSubmit={submitForm.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4 w-full max-w-96 mx-auto"
          >
            <FormField
              control={submitForm.control}
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
              control={submitForm.control}
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

            <Button type="submit">Sign up</Button>
          </form>
        </Form>
      )}
      {pendingVerification && (
        <div>
          <Form {...verifyForm}>
            <form onSubmit={verifyForm.handleSubmit(handleVerify)}>
              <FormField
                control={verifyForm.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Code..." {...field} />
                    </FormControl>
                    <FormDescription>Email will be your username for Sign In.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Verify Email</Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  )
}
