'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/_components/ui/form'
import { Input } from '@/_components/ui/input'
import { Button } from '@/_components/ui/button'

const loginFormSchema = z.object({
  email: z
    .string({
      required_error: 'Email é obrigatório',
    })
    .email('Email inválido')
    .toLowerCase(),
  password: z.string({
    required_error: 'Senha é obrigatória',
  }),
})

function LoginForm() {
  const [loginFailure, setLoginFailure] = useState(false)

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  })

  const router = useRouter()

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    setLoginFailure(false)

    const response = await signIn('credentials', {
      ...data,
      redirect: false,
    })

    if (response?.error) {
      setLoginFailure(true)
      return
    }

    router.replace('/')
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Digite seu email"
                    {...field}
                  />
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
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Digite sua senha"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full"
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Aguarde...
              </>
            ) : (
              <>Entrar</>
            )}
          </Button>
        </form>
      </Form>

      {loginFailure && (
        <div className="mt-4 rounded-lg bg-red-200 p-2 text-center text-xs text-red-800">
          Email e Senha não conferem
        </div>
      )}
    </div>
  )
}

export { LoginForm }
