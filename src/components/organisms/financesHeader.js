import {
  MoneyBalance,
  HeaderAvatar,
  Window,
  SettingsOptions
} from 'components/molecules'
import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { selectUser } from 'storage'
import { useState } from 'react'

export const FinancesHeader = () => {
  const user = useSelector(selectUser)
  const [openWindow, setOpenWindow] = useState(false)

  return (
    <>
      <Flex
        w={'570px'}
        flexDir={'column'}
        align={'center'}
        justify={'space-between'}
      >
        <Window setOpen={openWindow}>
          <SettingsOptions></SettingsOptions>
        </Window>
        <HeaderAvatar
          username={user?.name}
          avatarUrl={user?.avatar_url}
          onAvatar={() => {
            setOpenWindow(true)
            setTimeout(() => {
              setOpenWindow(false)
            }, 500)
          }}
        ></HeaderAvatar>
        <MoneyBalance value={'1 000,00'}></MoneyBalance>
      </Flex>
    </>
  )
}
