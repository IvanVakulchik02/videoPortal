import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { FormEvent, useState } from 'react'

import { Form } from '../../components/Form'
import { useAppDispatch } from '../../store'
import { setUser } from '../../store/features/userData/userDataSlice'

export const RegisterScreen = (): React.JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegisterClick = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const auth = getAuth()

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
        })
      )
      navigate('/')
    } catch (error: any) {
      setError(error.code)
    }
  }
  return (
    <div className="register-screen">
      <Form
        email={email}
        password={password}
        onEmailChange={(value: string): void => {
          setEmail(value), setError('')
        }}
        onPasswordChange={(value: string): void => {
          setPassword(value), setError('')
        }}
        onClick={handleRegisterClick}
        buttonTitle="Sign Up"
        title="Registration"
        url="/login"
        linkTitle="Login"
        error={error}
      />
    </div>
  )
}
