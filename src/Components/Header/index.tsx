import {
  Box,
  Flex,
  HStack,
  Image,
  Tab,
  TabList,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react'

export function Header() {
  return (
    <Box bgColor={'whiteAlpha.400'} alignItems="center" py="2">
      <Flex
        margin={'auto'}
        px={4}
        maxWidth={'1440px'}
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <HStack gap={4}>
          <Image
            src="/logo.jpeg"
            w={{ base: '130px', lg: '150px' }}
            alt="Logo Amamentação Confiante"
            rounded={'full'}
          ></Image>
          <VStack>
            <Text
              textAlign={'center'}
              color={'brand.blue'}
              fontFamily={'Gotham Black'}
              fontSize={{ base: '4xl', lg: '5xl' }}
            >
              Carolina Procaci
            </Text>
            <Text
              textAlign={'center'}
              fontFamily={'Gotham Light'}
              fontSize={{ base: '2xl', lg: '3xl' }}
            >
              Consultora em Amamentação
            </Text>
          </VStack>
        </HStack>
        <Tabs
          variant={'soft-rounded'}
          fontFamily={'Gotham'}
          colorScheme={'gray'}
        >
          <TabList my={4}>
            <Tab>Quem Sou Eu</Tab>
            <Tab>Consultorias</Tab>
            <Tab>Contato</Tab>
          </TabList>
        </Tabs>
      </Flex>
    </Box>
  )
}
