import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'

const EditTimer: React.FC = () => {
  const [searchParams] = useSearchParams()
  return <Heading>Editing timer: {searchParams.get('id')}</Heading>
}

export default EditTimer
