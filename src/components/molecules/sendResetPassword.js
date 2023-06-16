import { Flex } from '@chakra-ui/react'
import { MainInput, SubmitButton } from 'components/atoms'
import { useFormik } from 'formik'
import { object, string } from 'yup'

export const SendResetPassword = ({ mutation, loading, setLoading }) => {
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: object({
      email: string().email('E-mail Inválido').required('E-mail é Obrigatório')
    }),
    onSubmit: (data) => {
      setLoading(true)
      mutation.mutate(data)
    }
  })

  return (
    <Flex w={'280px'} flexDir={'column'} align={'center'}>
      <MainInput
        marginTop={'64px'}
        w={'280px'}
        placeholder={'E-mail'}
        name={'email'}
        onChange={handleChange}
        value={values.email}
        error={errors.email}
      ></MainInput>

      <SubmitButton
        w={'260px'}
        loading={loading}
        onClick={handleSubmit}
        marginTop={'64px'}
      >
        Enviar
      </SubmitButton>
    </Flex>
  )
}
