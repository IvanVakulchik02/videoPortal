import { Link } from 'react-router-dom'

import { FormEvent } from 'react'

import { ActionButton } from '../ActionButton'
import { Input } from '../Input'

interface FormProps {
  buttonTitle: string
  email: string
  error: string
  linkTitle: string
  onClick: (e: FormEvent<HTMLFormElement>) => void
  onEmailChange: (value: string) => void
  onPasswordChange: (value: string) => void
  password: string
  title: string
  url: string
}

export const Form = ({
  buttonTitle,
  email,
  error,
  linkTitle,
  onClick,
  onEmailChange,
  onPasswordChange,
  password,
  title,
  url,
}: FormProps): React.JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-title">{title}</div>
      <form className="form" onSubmit={onClick}>
        <Input
          onChange={onEmailChange}
          placeholder="Please, enter email..."
          type="email"
          value={email}
          id="email"
          title="Email"
        />
        <Input
          onChange={onPasswordChange}
          placeholder="Please, enter password..."
          type="password"
          value={password}
          id="password"
          title="Password"
        />

        <div className="error">{error}</div>
        <div className="form-actions">
          <Link className="link" to={url}>
            {linkTitle}
          </Link>
          <button id="submit" type="submit" className="form-actions-btn">
            <ActionButton title={buttonTitle} />
          </button>
        </div>
      </form>
    </div>
  )
}
