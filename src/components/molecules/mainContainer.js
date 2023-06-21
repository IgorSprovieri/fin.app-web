import { Flex } from '@chakra-ui/react'
import { DateInput, H1 } from 'components/atoms'
import { colors, slideUpAnimation } from 'styles'

export const MainContainer = ({ title, children }) => {
  return (
    <Flex
      w={['99.5%', '570px']}
      h={['calc(100dvh - 258px)', 'calc(100dvh - 326px)']}
      bgColor={colors.white}
      marginTop={['20px', '32px']}
      marginBottom={['0px', '16px']}
      borderRadius={['44px', '32px']}
      borderBottomRadius={['0px', '32px']}
      padding={'32px'}
      animation={slideUpAnimation}
      flexDir={'column'}
      align={'center'}
      justify={'flex-start'}
    >
      <Flex
        w={'100%'}
        flexDir={'row'}
        align={'center'}
        justify={'space-between'}
      >
        <H1>{title}</H1>
        <DateInput></DateInput>
      </Flex>
      <Flex
        w={'100%'}
        h={'100%'}
        marginTop={['32px', '32px']}
        overflowY={'scroll'}
      >
        {children}
      </Flex>
    </Flex>
  )
}
