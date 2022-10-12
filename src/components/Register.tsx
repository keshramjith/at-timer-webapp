import React from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel, Input, Button, VStack } from '@chakra-ui/react'

type LoginRegisterType = {
  email: string
  password: string
}

const Register = () => {
  const { register, handleSubmit } = useForm<LoginRegisterType>()

  const handleCreateUser = (formData: LoginRegisterType) => console.log('create user with formData: ', formData)

  return (
    <form onSubmit={handleSubmit(handleCreateUser)}>
      <VStack>
        <FormLabel>
          Email:
          <Input type='text' placeholder='email@address.com' {...register('email', { required: true })} />
        </FormLabel>
        <FormLabel>
          Password:
          <Input type='password' placeholder='*********' {...register('password', { required: true })} />
        </FormLabel>
        <Button colorScheme='teal'>Create account</Button>
      </VStack>
    </form>
  )
}

export default Register
