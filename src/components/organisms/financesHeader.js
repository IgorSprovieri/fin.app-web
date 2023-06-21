import {
  MoneyBalance,
  HeaderAvatar,
  Window,
  SettingOptions
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
        w={['100%', '570px']}
        marginTop={['48px', '32px']}
        paddingLeft={['32px', '0px']}
        flexDir={'column'}
        align={'center'}
        justify={'space-between'}
      >
        <Window isOpen={openWindow} setIsOpen={setOpenWindow}>
          <SettingOptions></SettingOptions>
        </Window>
        <HeaderAvatar
          username={user?.name}
          avatarUrl={user?.avatar_url}
          onAvatar={() => {
            setOpenWindow(true)
          }}
        ></HeaderAvatar>
        <MoneyBalance value={'1 000,00'}></MoneyBalance>
      </Flex>
    </>
  )
}
