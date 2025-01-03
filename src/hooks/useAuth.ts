import { useAppSelector } from '../store'

interface useAuthProps {
  email: string | null
  id: string | null
  isAuth: boolean
}

export const useAuth = (): useAuthProps => {
  const { email, id } = useAppSelector((state) => state.user)

  return {
    email,
    id,
    isAuth: !!email,
  }
}
