import { Flex } from '@chakra-ui/react'
import { MainInput, RegisterTitleImage, SubmitButton } from 'components'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUser } from 'storage'
import { object, string } from 'yup'

export const EditUserForm = ({ mutation }) => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: user.name || '',
      email: user.email || ''
    },
    validationSchema: object({
      name: string(),
      email: string().email('E-mail Inválido'),
      password: string()
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  })

  return (
    <Flex flexDir={'column'} align={'center'} w={'310px'}>
      <RegisterTitleImage></RegisterTitleImage>
      <MainInput
        name={'name'}
        placeholder={'Nome'}
        marginTop={'48px'}
        type={'text'}
        onChange={handleChange}
        value={values.name}
        error={errors.name}
      ></MainInput>
      <MainInput
        name={'email'}
        placeholder={'E-mail'}
        marginTop={'16px'}
        type={'text'}
        onChange={handleChange}
        value={values.email}
        error={errors.email}
      ></MainInput>
      <SubmitButton marginTop={'48px'} onClick={handleSubmit}>
        Alterar
      </SubmitButton>
      <SubmitButton
        invertColor={true}
        marginTop={'12px'}
        onClick={() => navigate('/home')}
      >
        Voltar
      </SubmitButton>
    </Flex>
  )
}
