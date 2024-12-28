import { useNavigate } from 'react-router-dom'

import { useEffect } from 'react'

import { useAuth } from '../../hooks/useAuth'
import { useAppDispatch } from '../../store'
import { removeUser } from '../../store/features/userData/userDataSlice'

export const Home = (): React.JSX.Element => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { email, isAuth } = useAuth()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])

  return (
    <div>
      Home
      <button
        onClick={(): void => {
          dispatch(removeUser())
        }}
      >
        Logout {email}
      </button>
    </div>
  )
}
