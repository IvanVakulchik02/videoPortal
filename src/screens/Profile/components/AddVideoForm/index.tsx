import { FormEvent, Ref, useState } from 'react'

import { ActionButton } from '../../../../components/ActionButton'
import { Input } from '../../../../components/Input'

interface AddVideoFormProps {
  onSubmit: (
    title: string,
    imgUrl: string,
    e: FormEvent<HTMLFormElement>
  ) => void
  ref: Ref<HTMLFormElement>
}

export const AddVideoForm = ({
  onSubmit,
  ref,
}: AddVideoFormProps): React.JSX.Element => {
  const [title, setTitle] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  return (
    <div className="add-video__modal-wrapper">
      <form
        ref={ref}
        onSubmit={(e: FormEvent<HTMLFormElement>): void =>
          onSubmit(title, imgUrl, e)
        }
        className="add-video__form"
      >
        <div className="add-video__form-title">Create new card</div>
        <Input
          onChange={setTitle}
          placeholder="Please, enter title..."
          value={title}
          id="videoTitle"
          title="Title"
        />
        <Input
          onChange={setImgUrl}
          placeholder="Please, enter img url..."
          value={imgUrl}
          id="imgUrl"
          title="Image URL"
        />
        <button
          disabled={title === '' || imgUrl === ''}
          id="submit"
          type="submit"
          className="add-video__form-btn"
        >
          <ActionButton title="Create card" />
        </button>
      </form>
    </div>
  )
}
