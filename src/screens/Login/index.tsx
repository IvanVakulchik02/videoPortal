import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { FormEvent, useState } from 'react'

import { Form } from '../../components/Form'
import { useAppDispatch } from '../../store'
import { setUser } from '../../store/features/userData/userDataSlice'

export const LoginScreen = (): React.JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLoginClick = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const auth = getAuth()
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
        })
      )

      if (!user.email) {
        throw new Error('empty email')
      }

      sessionStorage.setItem('vp-userEmail', user.email)

      navigate('/')
    } catch (error: any) {
      console.log({ error: error })
      setError(error.code)
    }
  }

  return (
    <div className="login-screen">
      <Form
        email={email}
        onEmailChange={(value: string): void => {
          setEmail(value), setError('')
        }}
        onPasswordChange={(value: string): void => {
          setPassword(value), setError('')
        }}
        password={password}
        onClick={handleLoginClick}
        buttonTitle="Sign In"
        title="Login"
        url="/register"
        linkTitle="Registration"
        error={error}
      />
    </div>
  )
}
