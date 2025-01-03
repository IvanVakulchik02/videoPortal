export const initialUserState: UserInitialState = {
  email: sessionStorage.getItem('vp-userEmail'),
  id: null,
}
interface UserInitialState {
  email: string | null
  id: string | null
}
