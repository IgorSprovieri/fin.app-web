import { FinanceCard } from 'components/atoms'

export const ListFinances = () => {
  const finances = [
    {
      id: 0,
      name: 'Salário',
      value: 2000.0,
      date: '06-05-2023'
    },
    {
      id: 1,
      name: 'Hamburguer',
      value: -22.9,
      date: '06-06-2023',
      category: 'Comida'
    },
    {
      id: 2,
      name: 'Aluguel',
      value: -300,
      date: '06-07-2023',
      category: 'Casa'
    }
  ]

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
