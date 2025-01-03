import clsx from 'clsx'
import moment from 'moment'

import { Statistics } from '../../../../apiMethods/videos/common.types'
import { ActionButton } from '../../../../components/ActionButton'
import { VideoStatistics } from '../../../../components/VideoStatistics'
import { getClassNameByDate } from '../../../../utils/getDateClassName'

interface PostProps {
  createdDate: number
  duration: number
  imageUrl: string
  onClick: () => void
  statistics?: Statistics
  title: string
}
export const Post = ({
  createdDate,
  duration,
  imageUrl,
  onClick,
  statistics,
  title,
}: PostProps): React.JSX.Element => {
  console.log('duration', duration)
  return (
    <div className="post">
      <div className="post-image">
        <img className="image" src={imageUrl} />
        <div className="duration">
          {moment.utc(duration * 1000).format('mm:ss')}
        </div>
      </div>
      <div className="post-info">
        {statistics && <VideoStatistics statistics={statistics} />}
        <div className="post-info__title" title={title}>
          {title}
        </div>
        <div className="post-info__created-date">
          {moment(createdDate).format('DD.MM.YYYY')}
        </div>
      </div>
      <div className="post-btn">
        <ActionButton onClick={onClick} title="Details" />
      </div>
      <div
        className={clsx('post-label', getClassNameByDate(createdDate))}
      ></div>
    </div>
  )
}
