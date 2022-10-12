import { Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

import Login from '../Login'
import Register from '../Register'

type State = 'login' | 'register'

const LoginRegister: React.FC = () => {
  const [state, setState] = useState<State>('login')

  return (
    <VStack>
      {state === 'login' ? (
        <>
          <Heading>Login</Heading>
          <Login />
          <Text onClick={() => setState('register')}>New to Activity Timer? Click here to sign up!</Text>
        </>
      ) : (
        <>
          <Heading>Create an account</Heading>
          <Register />
          <Text onClick={() => setState('login')}>Already have an account? Click here to sign in!</Text>
        </>
      )}
    </VStack>
  )
}

export default LoginRegister
