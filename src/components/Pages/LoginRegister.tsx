import React from 'react'

const LoginRegister: React.FC = () => <div>aijwfndiawf</div>

export default LoginRegister

// import { useForm } from 'react-hook-form'
// import { Input, Button, Heading, Text, Flex, Box, useToast } from '@chakra-ui/react'
// import { useNavigate } from 'react-router-dom'

// type State = 'login' | 'register'

// type LoginRegisterType = {
//   email: string
//   password: string
// }

// const LoginRegister: React.FC = () => {
//   const [state, setState] = useState<State>('login')
//   const { register, handleSubmit } = useForm<LoginRegisterType>()

//   const navigate = useNavigate()
//   const toast = useToast()
//   const handleCreateUser = async (formData: LoginRegisterType) => {
//     try {
//       await fetch('http://localhost:8080/user', {
//         method: 'POST',
//         body: JSON.stringify(formData),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       navigate('/create')
//     } catch (error) {
//       toast({
//         title: 'Sign up failed!',
//         description: 'Account sign up failed, please try again :('
//       })
//     }
//   }

//   const handleLoginUser = (formData: LoginRegisterType) => console.log('login user with formData: ', formData)

//   return (
//     <Flex backgroundColor='#805AD5' minHeight='100vh' flexDirection='column' align='center' justify='center'>
//       <Box borderRadius='1.5em' backgroundColor='white' p='2.5rem' width='30em'>
//         {state === 'login' ? (
//           <form onSubmit={handleSubmit(handleLoginUser)}>
//             <Flex flexDirection='column' align='center'>
//               <Heading mb='1.5rem'>Login</Heading>
//               <Input
//                 type='email'
//                 placeholder='email@address.com'
//                 width='17rem'
//                 {...register('email', { required: true })}
//               />
//               <Input
//                 type='password'
//                 placeholder='*********'
//                 width='17rem'
//                 {...register('password', { required: true })}
//               />
//               <Button type='submit' color='white' backgroundColor='#805AD5' mt='1rem' mb='1.5rem'>
//                 Login
//               </Button>
//               <Text fontSize='sm' onClick={() => setState('register')}>
//                 New to Activity Timer? Click here to sign up!
//               </Text>
//             </Flex>
//           </form>
//         ) : (
//         )}
//       </Box>
//     </Flex>
//   )
// }

// export default LoginRegister
