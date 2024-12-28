import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { FormEvent, useState } from 'react'

import { useAppDispatch } from '../../store'
import { setUser } from '../../store/features/userData/userDataSlice'
import { Form } from '../Form'

export const SignUp = (): React.JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegisterClick = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password).then(
      async ({ user }) => {
        try {
          const idToken = await user.getIdToken()
          navigate('/')
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: idToken,
            })
          )
        } catch (error) {
          console.error('Ошибка при получении токена:', error)
        }
      }
    )
  }

  return (
    <div>
      <Form
        email={email}
        password={password}
        onPasswordChange={setPassword}
        onEmailChange={setEmail}
        onClick={handleRegisterClick}
        title="Sign Up"
      />
    </div>
  )
}
