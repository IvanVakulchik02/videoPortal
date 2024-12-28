import { useAppSelector } from '../store'

interface useAuthProps {
  email: string | null
  id: string | null
  isAuth: boolean
  token: string | null
}

export const useAuth = (): useAuthProps => {
  const { email, id, token } = useAppSelector((state) => state.user)

  return {
    email,
    id,
    isAuth: !!email,
    token,
  }
}
