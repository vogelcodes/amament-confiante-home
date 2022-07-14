import { Container, Image, Box, Text, Flex, Center } from '@chakra-ui/react'

export function Hero() {
  return (
    <Container p={8} maxW={'1440px'}>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box w={{ base: '70%', md: '40%' }}>
          <Image rounded={'md'} src="/carol.jpg" alt="Carolina Procaci"></Image>
        </Box>
        <Center px={6} flex={1}>
          <Text
            textAlign={'center'}
            fontSize={{ base: '3xl', md: '5xl' }}
            fontFamily={'Gotham Black'}
            color={'brand.blue'}
          >
            &quot;Ter confiança é essencial para amamentar&quot;
          </Text>
        </Center>
      </Flex>
    </Container>
  )
}
