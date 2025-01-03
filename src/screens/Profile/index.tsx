import { useNavigate } from 'react-router-dom'

import { FormEvent, useRef, useState } from 'react'

import { ActionButton } from '../../components/ActionButton'
import { GoBackButton } from '../../components/GoBackButton'
import { GoBackIcon } from '../../components/Icons/GoBackIcon'
import { ProfileIcon } from '../../components/Icons/ProfileIcon'
import { useAuth } from '../../hooks/useAuth'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useAppDispatch, useAppSelector } from '../../store'
import { removeUser } from '../../store/features/userData/userDataSlice'
import { setMyVideos } from '../../store/features/videos/videosDataSlice'

import { AddVideoForm } from './components/AddVideoForm'
import { MyVideos } from './components/MyVideos'

export const ProfileScreen = (): React.JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { email } = useAuth()

  const addVideoModalRef = useRef<HTMLFormElement>(null)
  const [isOpenAddVideoModal, setIsOpenAddVideoModal] = useState(false)

  useOutsideClick({
    handler: () => setIsOpenAddVideoModal(false),
    isOpen: isOpenAddVideoModal,
    ref: addVideoModalRef,
  })

  const {
    videos: {
      myVideos: { data },
    },
  } = useAppSelector((state) => state)

  const handleCreateNewVideo = (
    title: string,
    imgUrl: string,
    e: FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault()

    const newCardData = {
      createdDate: new Date().getTime(),
      id: Math.random() + title,
      imgUrl,
      title,
    }

    dispatch(setMyVideos(!!data ? [...data, newCardData] : [newCardData]))

    setIsOpenAddVideoModal(false)
  }

  return (
    <section className="profile-screen">
      {isOpenAddVideoModal && (
        <AddVideoForm ref={addVideoModalRef} onSubmit={handleCreateNewVideo} />
      )}
      <div className="profile-header__wrapper">
        <GoBackButton
          className=""
          onClick={(): Promise<void> | void => navigate(-1)}
        >
          <GoBackIcon />
        </GoBackButton>
        <div className="profile-header">
          <div className="profile-header__info">
            <ProfileIcon />
            <div className="email">{email}</div>
          </div>
          <ActionButton
            className="logout-btn"
            title="Logout"
            onClick={(): void => {
              sessionStorage.removeItem('vp-userEmail')
              dispatch(removeUser())
              navigate('/')
            }}
          />
        </div>
      </div>

      <MyVideos
        data={data}
        onClick={(): void => setIsOpenAddVideoModal(true)}
      />
    </section>
  )
}
