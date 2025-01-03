import moment from 'moment'

import { ActionButton } from '../../../../components/ActionButton'
import { NoData } from '../../../../components/NoData'
import { MyVideos as MyVideosData } from '../../../../store/features/videos/initialState'

import { MyVideo } from './components/MyVideo'

interface MyVideosProps {
  data: MyVideosData[] | undefined
  onClick: () => void
}

export const MyVideos = ({
  data,
  onClick,
}: MyVideosProps): React.JSX.Element => {
  console.log('data', data)
  return (
    <div className="my-videos">
      <div className="my-videos__title">
        My Videos <ActionButton title="Add new video" onClick={onClick} />
      </div>
      {!data && <NoData />}
      <div className="my-videos__list">
        {!!data &&
          data.map((item) => (
            <MyVideo
              key={item.id}
              createdDate={moment(item.createdDate).format('DD.MM.YYYY')}
              imgUrl={item.imgUrl}
              title={item.title}
            />
          ))}
      </div>
    </div>
  )
}
