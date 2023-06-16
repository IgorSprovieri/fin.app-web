import { useMutation } from '@tanstack/react-query'
import { getCategories } from 'api'
import { CategoryCard } from 'components/atoms'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'storage'

export const ListCategories = () => {
  const user = useSelector(selectUser)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    mutation.mutate()
  }, [])

  const mutation = useMutation({
    mutationFn: () => getCategories(user?.token),
    onSuccess: (data) => {
      setCategories(data)
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return (
    <>
      {categories.map((element) => (
        <CategoryCard
          key={element.id}
          category={element.category}
          iconUrl={element.icon.icon_url}
          hexColor={element.color.hexColor}
        ></CategoryCard>
      ))}
    </>
  )
}
