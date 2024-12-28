import { Link } from 'react-router-dom'

import { SignIn } from '../../components/SignIn'

export const Login = (): React.JSX.Element => {
  return (
    <div>
      Login
      <SignIn />
      <p>
        or <Link to="/register">Register</Link>
      </p>
    </div>
  )
}
