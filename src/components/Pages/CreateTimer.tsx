import React from 'react'
import { Heading, Flex, Input, Button, useToast } from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'

type FormData = {
  title: string
  time: string
}

const CreateTimer = () => {
  const {
    register,
    handleSubmit
    // formState: { errors }
  } = useForm<FormData>()

  const toast = useToast()

  const onSubmit = async (formData: FieldValues) => {
    try {
      const response = await fetch('http://localhost:8080/timer', {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      toast({
        title: data?.message,
        description: 'Successfully created timer!'
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Flex flexDirection='column' alignItems='center' justifyContent='center'>
      <Heading>Create Timer</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder='Title' {...register('title')} />
        <Input type='time' min='00:01' {...register('time')} />
        <Button colorScheme='teal' type='submit'>
          Save
        </Button>
      </form>
    </Flex>
  )
}

export default CreateTimer
