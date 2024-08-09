'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { usePostFormDataMutation } from '@/redux/api/baseApi'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const formSchema = z.object({
  name: z.string().min(2, { message: 'Username must be at least 2 characters' }).max(16, { message: 'Username must be max 16 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  image: z.string(),
  // password: z.string().min(1, {message: 'Must have at least 1 character'}).regex(passwordValidation, {message: 'Your password must have 8 char, one uppercase, one lowercase, one number and special char'})
  password: z.string().min(1, { message: 'Must have at least 1 character' })
})

const LoginPage = () => {
  const [postFormData, { isLoading, isSuccess, isError }] = usePostFormDataMutation()
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      image: ''
    }
  })

  const onSubmit = async (value) => {
    try {
      const response = await postFormData(value).unwrap()

      if (response?.status) {
        router.push('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form  {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="User Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="image" render={({ field }) => (
          <FormItem>
            <FormLabel>Image Url</FormLabel>
            <FormControl>
              <Input placeholder="Image Url" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="password" render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <p className='text-xs'>Already have account <Link className=' underline font-semibold' href='/api/auth/signin'>Sign in</Link></p>
        {isLoading ? <Button disabled className="w-full" type="submit"><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating your account</Button> : <Button className="w-full" type="submit">Create account</Button>}
      </form>
      <div>
        <p className='text-sm text-center mt-3'>Or, Continue with </p>
        <div className="flex gap-3 pt-4">
          <Button onClick={() => signIn()} variant='outline' className='w-full'>
            <FcGoogle className='size-5 mr-3' />Google
          </Button>
          <Button onClick={() => signIn()} variant='outline' className='w-full'>
            <FaGithub className='size-5 mr-3' />Github
          </Button>
        </div>
      </div>
    </Form>
  )
}

export default LoginPage