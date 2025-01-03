import { RefObject, useCallback, useEffect } from 'react'

interface UseOutsideClickOptions {
  handler: () => void
  isOpen: boolean
  ref: RefObject<HTMLElement | null>
}

export const useOutsideClick = ({
  handler,
  isOpen,
  ref,
}: UseOutsideClickOptions): void => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (
        isOpen &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        handler()
      }
    },
    [handler, isOpen, ref]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [handleClick])
}
