import { Flex } from '@chakra-ui/react'
import { DateInput, H1 } from 'components/atoms'
import { colors, slideUpAnimation } from 'styles'

export const MainContainer = ({ title, children }) => {
  return (
    <Flex
      w={'570px'}
      h={'calc(100vh - 326px)'}
      bgColor={colors.white}
      marginTop={'32px'}
      marginBottom={'16px'}
      borderRadius={'32px'}
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
      <Flex w={'100%'} h={'100%'} marginTop={'32px'} overflow={'scroll'}>
        {children}
      </Flex>
    </Flex>
  )
}
