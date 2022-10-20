import React from 'react'
import { Input, Button, Heading, Text, Flex, useToast } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type LoginRegisterType = {
  email: string
  password: string
}

const Register = () => {
  const { register, handleSubmit } = useForm<LoginRegisterType>()
  const navigate = useNavigate()
  const toast = useToast()

  const handleCreateUser = async (formData: LoginRegisterType) => {
    try {
      await fetch('http://localhost:8080/user', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      navigate('/dashboard')
    } catch (error) {
      toast({
        title: 'Sign up failed!',
        description: 'Account sign up failed, please try again :('
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(handleCreateUser)}>
      <Flex flexDirection='column' align='center' justify='center'>
        <Heading mb='1.5rem'>Create an account</Heading>
        <Input
          type='email'
          placeholder='email@address.com'
          {...register('email', { required: true })}
          mb='0.5rem'
          width='17rem'
        />
        <Input type='password' placeholder='*********' width='17rem' {...register('password', { required: true })} />
        <Button type='submit' color='white' backgroundColor='#805AD5' mt='1rem' mb='1.5rem'>
          Sign up
        </Button>
        <Text fontSize='sm' onClick={() => navigate('/')}>
          Already have an account? Click here to sign in!
        </Text>
      </Flex>
    </form>
  )
}

export default Register
