import { useMutation } from '@tanstack/react-query'
import { forgotPassword } from 'api'
import { CancelButton, WalletTitle } from 'components/atoms'
import { ResetPasswordToken, SendResetPassword } from 'components/molecules'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ResetPassword = ({ alertError }) => {
  const navigate = useNavigate()
  const [stage, setStage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const sendEmailMutation = useMutation({
    mutationFn: (data) => forgotPassword(data),
    onSuccess: (data) => {
      setLoading(false)
      setEmail(data?.email)
      setStage(1)
    },
    onError: (error) => {
      setLoading(false)
      alertError(error?.message)
    }
  })

  return (
    <>
      <WalletTitle mL={'32px'} mR={'16px'}>
        Redefinir Senha
      </WalletTitle>
      {stage === 0 ? (
        <SendResetPassword
          loading={loading}
          setLoading={setLoading}
          mutation={sendEmailMutation}
        ></SendResetPassword>
      ) : (
        <ResetPasswordToken email={email}></ResetPasswordToken>
      )}

      <CancelButton onClick={() => navigate(-1)} marginTop={'16px'} w={'260px'}>
        Voltar
      </CancelButton>
    </>
  )
}
