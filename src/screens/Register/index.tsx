import { Link } from 'react-router-dom'

import { SignUp } from '../../components/SignUp'

export const Register = (): React.JSX.Element => {
  return (
    <div>
      Register
      <SignUp />
      <p>
        or <Link to="/login">Login</Link>
      </p>
    </div>
  )
}
