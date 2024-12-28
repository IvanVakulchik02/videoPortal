import { FormEvent } from 'react'

interface FormProps {
  email: string
  onClick: (e: FormEvent<HTMLFormElement>) => void
  onEmailChange: (value: string) => void
  onPasswordChange: (value: string) => void
  password: string
  title: string
}

export const Form = ({
  email,
  onClick,
  onEmailChange,
  onPasswordChange,
  password,
  title,
}: FormProps): React.JSX.Element => {
  return (
    <form onSubmit={onClick}>
      <input
        type="email"
        value={email}
        onChange={({ target: { value } }): void => {
          onEmailChange(value)
        }}
        placeholder="Please, enter email..."
      />
      <input
        type="password"
        value={password}
        onChange={({ target: { value } }): void => {
          onPasswordChange(value)
        }}
        placeholder="Please, enter password..."
      />
      <button id="submit" type="submit" className="form-btn">
        {title}
      </button>
    </form>
  )
}
