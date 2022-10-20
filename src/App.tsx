import React from 'react'
import { Outlet } from 'react-router-dom'
import { Flex, Box } from '@chakra-ui/react'

const App: React.FC = () => (
  <Flex backgroundColor='#805AD5' minHeight='100vh' flexDirection='column' align='center' justify='center'>
    <Box borderRadius='1.5em' backgroundColor='white' p='2.5rem' width='30em'>
      <Outlet />
    </Box>
  </Flex>
)

export default App
