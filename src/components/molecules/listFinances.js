import { FinanceCard } from 'components/atoms'

export const ListFinances = ({ finances }) => {
  return (
    <>
      {' '}
      {finances.map((element) => (
        <FinanceCard
          key={element.id}
          name={element.name}
          value={element.value}
          date={element.date}
          category={element.category}
        ></FinanceCard>
      ))}
    </>
  )
}
