import clsx from 'clsx'

import { useRef } from 'react'

import { useOutsideClick } from '../../../../hooks/useOutsideClick'

type DropdownProps = {
  isOpen: boolean
  onClick: () => void
  onSelectOption: (option: number) => void
  options: number[]
  selectedOption: number
  title: string
}

export const Dropdown = ({
  isOpen,
  onClick,
  onSelectOption,
  options,
  selectedOption,
  title,
}: DropdownProps): React.JSX.Element => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useOutsideClick({ handler: onClick, isOpen, ref: dropdownRef })

  return (
    <div ref={dropdownRef} className="dropdown" onClick={onClick}>
      <span>{title}</span>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option}
              className={clsx('dropdown-list__item', {
                selected: selectedOption === option,
              })}
              onClick={(): void => {
                onSelectOption(option)
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
