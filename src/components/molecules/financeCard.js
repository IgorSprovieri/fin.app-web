import { DeleteIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading, IconButton, Image } from '@chakra-ui/react'
import { colors } from 'styles'

export const FinanceCard = ({ name, value, date, category }) => {
  const moneyFormat = (value) => {
    const options = {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 3
    }
    const formatNumber = new Intl.NumberFormat('pt-BR', options)

    return formatNumber.format(value)
  }

  const dateFormat = (date) => {
    const newDate = new Date()
    const monthFormat = new Intl.DateTimeFormat('pt-BR', { month: 'long' })

    const day = newDate.getDate()
    const month = monthFormat.format(newDate)
    const year = newDate.getFullYear()

    return `${day} ${month.slice(0, 1).toUpperCase()}${month.slice(
      1,
      3
    )} ${year}`
  }
  return (
    <Flex
      w={'100%'}
      h={'46px'}
      flexDir={'row'}
      align={'center'}
      marginBottom={'16px'}
    >
      <Button
        w={'100%'}
        display={'flex'}
        flexDir={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        margin={'0px 8px 0px 0px'}
        padding={'0px'}
        backgroundColor={colors.white}
        borderTopLeftRadius={'20px'}
        borderBottomLeftRadius={'20px'}
        paddingRight={'8px'}
      >
        <Flex>
          <Image
            w={'40px'}
            h={'40px'}
            borderRadius={'100px'}
            border={'0.5px solid gray'}
          ></Image>
          <Flex
            flexDir={'column'}
            align={'center'}
            justify={'center'}
            marginLeft={'16px'}
          >
            <Heading
              fontWeight={'bold'}
              fontSize={'18px'}
              color={colors.background}
              textAlign={'left'}
              w={'100%'}
            >
              {name}
            </Heading>
            <Heading
              fontWeight={'semiBold'}
              fontSize={'16px'}
              color={colors.gray}
              textAlign={'left'}
              w={'100%'}
            >
              {moneyFormat(value)}
            </Heading>
          </Flex>
        </Flex>
        <Flex
          flexDir={'column'}
          align={'center'}
          justify={'center'}
          marginLeft={'16px'}
        >
          <Heading
            fontWeight={'semiBold'}
            fontSize={'16px'}
            color={colors.gray}
            textAlign={'right'}
            w={'100%'}
          >
            {dateFormat(date)}
          </Heading>
          <Heading
            fontWeight={'semiBold'}
            fontSize={'16px'}
            color={value > 0 ? colors.green : colors.red}
            textAlign={'right'}
            w={'100%'}
          >
            {value > 0 ? 'Receita' : category}
          </Heading>
        </Flex>
      </Button>
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
