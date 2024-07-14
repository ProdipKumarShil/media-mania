'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const formSchema = z.object({
  username: z.string().min(2, { message: 'Username must be at least 2 characters' }).max(16, { message: 'Username must be max 16 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  // password: z.string().min(1, {message: 'Must have at least 1 character'}).regex(passwordValidation, {message: 'Your password must have 8 char, one uppercase, one lowercase, one number and special char'})
  password: z.string().min(1, { message: 'Must have at least 1 character' })
})

const LoginPage = () => {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = async(value) => {
    try {
      const res = await signIn('credentials', {
        email: value?.email,
        password: value?.password,
        redirect: false
      })
      console.log(res)
      if(res.error){
        console.log('Invalid Credentials')
      }
      router.replace('dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField control={form.control} name="username" render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="User Name" {...field} />
            </FormControl>
            <FormDescription>Your user name</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Email" {...field} />
            </FormControl>
            <FormDescription>Your verified email address</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="password" render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Password" {...field} />
            </FormControl>
            <FormDescription>Your secure password</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <Button className="w-full" type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default LoginPage