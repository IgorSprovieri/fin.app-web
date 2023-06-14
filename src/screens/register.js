import { Flex } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import {
  LinkButton,
  MainInput,
  PopUp,
  RegisterTitleImage,
  SubmitButton,
  WaveImage
} from 'components'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postUser } from 'services'
import { object, string } from 'yup'

export const RegisterScreen = () => {
  const navigate = useNavigate()

  const [openPopUp, setOpenPopUp] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const mutation = useMutation({
    mutationFn: postUser,
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      setOpenPopUp(true)
      setErrorMessage(error.message)
      setTimeout(() => {
        setOpenPopUp(false)
      }, 500)
    }
  })

  const onLogin = () => {
    navigate('/login')
  }

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: object({
      name: string().required('Nome é Obrigatório'),
      email: string().email('E-mail Inválido').required('E-mail é Obrigatório'),
      password: string().required('Senha é Obrigatória')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  })

  return (
    <Flex
      flexDir={'column'}
      align={'center'}
      justify={'center'}
      w={'100vw'}
      h={'100vh'}
    >
      <WaveImage></WaveImage>
      <PopUp message={errorMessage} title={'Erro'} setOpen={openPopUp}></PopUp>
      <Flex flexDir={'column'} align={'center'} w={310}>
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
        <MainInput
          name={'password'}
          placeholder={'Senha'}
          marginTop={'16px'}
          type={'password'}
          onChange={handleChange}
          value={values.password}
          error={errors.password}
        ></MainInput>
        <SubmitButton marginTop={'48px'} onClick={handleSubmit}>
          Criar Conta
        </SubmitButton>
        <LinkButton onClick={() => onLogin()}>
          Já tem conta? Faça o Login!
        </LinkButton>
      </Flex>
    </Flex>
  )
}
