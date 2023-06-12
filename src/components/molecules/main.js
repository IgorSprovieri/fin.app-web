import { Flex } from '@chakra-ui/react'
import { DateInput, H1 } from 'components/atoms'
import { colors } from 'styles'

export const Main = ({ title, animation, children }) => {
  return (
    <Flex
      w={'570px'}
      h={'100%'}
      bgColor={colors.white}
      marginTop={'32px'}
      marginBottom={'16px'}
      borderRadius={'32px'}
      padding={'32px'}
      animation={animation}
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
      <Flex w={'100%'} h={'100%'} marginTop={'32px'}>
        {children}
      </Flex>
    </Flex>
  )
}
