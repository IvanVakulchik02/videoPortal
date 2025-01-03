interface InputProps {
  id: string
  onChange: (value: string) => void
  placeholder: string
  title: string
  type?: string
  value: string
}

export const Input = ({
  id,
  onChange,
  placeholder,
  title,
  type = 'text',
  value,
}: InputProps): React.JSX.Element => {
  return (
    <>
      <label htmlFor={id} className="input-label">
        <span className="input-label__text"> {title}</span>
      </label>
      <input
        id={id}
        className="input"
        type={type}
        value={value}
        onChange={({ target: { value } }): void => {
          onChange(value)
        }}
        placeholder={placeholder}
      />
    </>
  )
}
