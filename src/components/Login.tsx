import React from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel, Input, Button, VStack } from '@chakra-ui/react'

type LoginRegisterType = {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginRegisterType>()

  const handleLoginUser = (formData: LoginRegisterType) => console.log('login user with formData: ', formData)

  return (
    <form onSubmit={handleSubmit(handleLoginUser)}>
      <VStack>
        <FormLabel>
          Email:
          <Input type='text' placeholder='email@address.com' {...register('email', { required: true })} />
        </FormLabel>
        <FormLabel>
          Password:
          <Input type='password' placeholder='*********' {...register('password', { required: true })} />
        </FormLabel>
        <Button type='submit' colorScheme='teal'>
          Login
        </Button>
      </VStack>
    </form>
  )
}

export default Login
