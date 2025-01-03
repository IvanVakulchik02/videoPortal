import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

import { useRef, useState } from 'react'

import { ActionButton } from '../../../../components/ActionButton'
import { LogoIcon } from '../../../../components/Icons/LogoIcon'
import { ProfileIcon } from '../../../../components/Icons/ProfileIcon'
import { SettingsIcon } from '../../../../components/Icons/SettingsIcon'
import { useAuth } from '../../../../hooks/useAuth'
import { useOutsideClick } from '../../../../hooks/useOutsideClick'
import { useAppDispatch } from '../../../../store'
import { removeUser } from '../../../../store/features/userData/userDataSlice'

interface HeaderProps {
  onFilterButtonClick: () => void
  onLogoClick: () => void
  onSearchClick: () => void
  onSearchValueChange: (value: string) => void
  searchValue: string
}
export const Header = ({
  onFilterButtonClick,
  onLogoClick,
  onSearchClick,
  onSearchValueChange,
  searchValue,
}: HeaderProps): React.JSX.Element => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const profileRef = useRef<HTMLDivElement>(null)
  const { email, isAuth } = useAuth()

  const [shouldOpenProfile, setShouldOpenProfile] = useState(false)

  useOutsideClick({
    handler: () => setShouldOpenProfile(false),
    isOpen: shouldOpenProfile,
    ref: profileRef,
  })

  const handleProfileOptionClick = async (): Promise<void> => {
    if (isAuth) {
      sessionStorage.removeItem('vp-userEmail')
      await dispatch(removeUser())
      setShouldOpenProfile(false)
      return
    }
    navigate('/login')
  }
  return (
    <header className="header">
      <div className="header-logo" onClick={onLogoClick}>
        <LogoIcon />
      </div>
      <div className="search__actions">
        <input
          className="search-input"
          type="text"
          value={searchValue}
          onChange={({ target: { value } }): void => {
            onSearchValueChange(value)
          }}
          placeholder="Search..."
          onKeyDown={(e): void => {
            if (e.key === 'Enter') {
              e.preventDefault()
              onSearchClick()
            }
          }}
        />
        <ActionButton className="search-btn" onClick={onSearchClick}>
          Search
        </ActionButton>
        <ActionButton className="settings-btn" onClick={onFilterButtonClick}>
          <SettingsIcon />
        </ActionButton>
      </div>
      <div className="profile-info">
        {email && <div className="profile-info__email">{email}</div>}
        <div
          className="profile-info__content"
          onClick={(): void => setShouldOpenProfile(true)}
        >
          <ProfileIcon />
          {shouldOpenProfile && (
            <div ref={profileRef} className="profile-options">
              {isAuth && (
                <div
                  className="profile-options__item"
                  onClick={(): Promise<void> | void => navigate('/profile')}
                >
                  Profile
                </div>
              )}
              <div
                className={clsx('profile-options__item', {
                  'color-green': !isAuth,
                  'color-red': isAuth,
                })}
                onClick={handleProfileOptionClick}
              >
                {isAuth ? 'Logout' : 'Login'}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
