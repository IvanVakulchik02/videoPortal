export const initialUserState: UserInitialState = {
  email: null,
  id: null,
  token: null,
}
interface UserInitialState {
  email: string | null
  id: string | null
  token: string | null
}
