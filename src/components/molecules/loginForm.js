import { Flex } from '@chakra-ui/react'
import {
  CancelButton,
  LinkButton,
  MainInput,
  SubmitButton,
  WalletTitle
} from 'components/atoms'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { object, string } from 'yup'

export const LoginForm = ({ mutation }) => {
  const navigate = useNavigate()
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: object({
      email: string().email('E-mail Inválido').required('E-mail é Obrigatório'),
      password: string().required('Senha é Obrigatória')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  })

  return (
    <Flex flexDir={'column'} align={'center'} w={'310px'}>
      <WalletTitle marginTop={'32px'} mL={'38px'} mR={'30px'}>
        Login
      </WalletTitle>

      <MainInput
        name={'email'}
        placeholder={'E-mail'}
        marginTop={'60px'}
        type={'text'}
        onChange={handleChange}
        value={values.email}
        error={errors.email}
      ></MainInput>
      <MainInput
        name={'password'}
        placeholder={'Senha'}
        marginTop={'12px'}
        type={'password'}
        onChange={handleChange}
        value={values.password}
        error={errors.password}
      ></MainInput>
      <SubmitButton w={'260px'} marginTop={'40px'} onClick={handleSubmit}>
        Entrar
      </SubmitButton>
      <CancelButton
        w={'260px'}
        marginTop={'12px'}
        onClick={() => navigate('/register')}
      >
        Criar Conta
      </CancelButton>
      <LinkButton
        marginTop={'16px'}
        onClick={() => navigate('/reset-password')}
      >
        Esqueci minha senha
      </LinkButton>
    </Flex>
  )
}
