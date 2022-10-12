import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input, Button, Heading, Text, Flex, Box } from '@chakra-ui/react'

type State = 'login' | 'register'

type LoginRegisterType = {
  email: string
  password: string
}

const LoginRegister: React.FC = () => {
  const [state, setState] = useState<State>('login')
  const { register, handleSubmit } = useForm<LoginRegisterType>()

  const handleCreateUser = async (formData: LoginRegisterType) => {
    const response = await fetch('http://localhost:8080/user', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log('created user data: ', data)
  }

  const handleLoginUser = (formData: LoginRegisterType) => console.log('login user with formData: ', formData)

  return (
    <Flex backgroundColor='#805AD5' minHeight='100vh' flexDirection='column' align='center' justify='center'>
      <Box borderRadius='1.5em' backgroundColor='white' p='2.5rem' width='30em'>
        {state === 'login' ? (
          <form onSubmit={handleSubmit(handleLoginUser)}>
            <Flex flexDirection='column' align='center'>
              <Heading mb='1.5rem'>Login</Heading>
              <Input
                type='email'
                placeholder='email@address.com'
                width='17rem'
                {...register('email', { required: true })}
              />
              <Input
                type='password'
                placeholder='*********'
                width='17rem'
                {...register('password', { required: true })}
              />
              <Button type='submit' color='white' backgroundColor='#805AD5' mt='1rem' mb='1.5rem'>
                Login
              </Button>
              <Text fontSize='sm' onClick={() => setState('register')}>
                New to Activity Timer? Click here to sign up!
              </Text>
            </Flex>
          </form>
        ) : (
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
              <Input
                type='password'
                placeholder='*********'
                width='17rem'
                {...register('password', { required: true })}
              />
              <Button type='submit' color='white' backgroundColor='#805AD5' mt='1rem' mb='1.5rem'>
                Sign up
              </Button>
              <Text fontSize='sm' onClick={() => setState('login')}>
                Already have an account? Click here to sign in!
              </Text>
            </Flex>
          </form>
        )}
      </Box>
    </Flex>
  )
}

export default LoginRegister
