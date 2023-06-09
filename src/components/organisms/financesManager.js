import { Main, Menu } from 'components/molecules'
import { useState } from 'react'
import { slideUpAnimation } from 'styles'

export const FinancesManager = () => {
  const [mainAnimation, setMainAnimation] = useState(slideUpAnimation)
  const [mainTitle, setMainTitle] = useState('Transações')

  const onClickHome = () => {
    setMainAnimation(slideUpAnimation)
    setMainTitle('Categorias')
  }

  const onClickTransitions = () => {
    setMainAnimation(slideUpAnimation)
    setMainTitle('Transações')
  }
  const onClickBalance = () => {
    setMainAnimation(slideUpAnimation)
    setMainTitle('Balanço')
  }

  return (
    <>
      <Menu
        onHome={() => onClickHome()}
        onTransitions={() => onClickTransitions()}
        onBalance={() => onClickBalance()}
      ></Menu>
      <Main title={mainTitle} animation={mainAnimation}></Main>
    </>
  )
}
