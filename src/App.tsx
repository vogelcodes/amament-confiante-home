import { Box } from '@chakra-ui/react'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'

export function App() {
  return (
    <Box bgColor={'brand.green'} w={'100%'}>
      <Header />
      <Hero></Hero>
    </Box>
  )
}
