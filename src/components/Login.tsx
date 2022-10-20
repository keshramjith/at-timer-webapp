import React from 'react'
import { Input, Button, Heading, Text, Flex, useToast } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type LoginRegisterType = {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginRegisterType>()
  const navigate = useNavigate()
  const toast = useToast()

  const handleLoginUser = async (formData: LoginRegisterType) => {
    try {
      const resp = await fetch('http://localhost:8080/login', { method: 'POST', body: JSON.stringify(formData) })
      const data = await resp.json()
      if (data) navigate('/dashboard')
    } catch (error) {
      toast({ title: 'Login failed!', description: 'Please try again' })
    }
  }

  return (
    <form onSubmit={handleSubmit(handleLoginUser)}>
      <Flex flexDirection='column' align='center'>
        <Heading mb='1.5rem'>Login</Heading>
        <Input type='email' placeholder='email@address.com' width='17rem' {...register('email', { required: true })} />
        <Input type='password' placeholder='*********' width='17rem' {...register('password', { required: true })} />
        <Button type='submit' color='white' backgroundColor='#805AD5' mt='1rem' mb='1.5rem'>
          Login
        </Button>
        <Text fontSize='sm' onClick={() => navigate('/register')}>
          New to Activity Timer? Click here to sign up!
        </Text>
      </Flex>
    </form>
  )
}

export default Login
