import { DeleteIcon } from '@chakra-ui/icons'
import { Flex, Heading, IconButton, Image } from '@chakra-ui/react'
import { colors } from 'styles'

export const CategoryCard = ({ hexColor, iconUrl, category }) => {
  return (
    <Flex
      w={'100%'}
      h={'46px'}
      flexDir={'row'}
      align={'center'}
      justify={'space-between'}
      marginBottom={'16px'}
    >
      <Flex flexDir={'row'} align={'center'} justify={'flex-start'}>
        <Flex
          w={'40px'}
          h={'40px'}
          bgColor={hexColor}
          borderRadius={'20px'}
          flexDir={'column'}
          align={'center'}
          justify={'center'}
        >
          <Image w={'22px'} h={'22px'} src={iconUrl || 'default.svg'}></Image>
        </Flex>

        <Heading
          fontWeight={'semi-bold'}
          fontSize={'20px'}
          color={colors.background}
          textAlign={'left'}
          marginLeft={'16px'}
        >
          {category}
        </Heading>
      </Flex>
      <IconButton
        variant="outline"
        border={'0px'}
        h={'34px'}
        w={'44px'}
        borderRadius={'50px'}
        icon={<DeleteIcon></DeleteIcon>}
      ></IconButton>
    </Flex>
  )
}
