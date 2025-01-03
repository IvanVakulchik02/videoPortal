import moment from 'moment'
import { useNavigate } from 'react-router-dom'

import { ReactNode } from 'react'

import { Item } from '../../../../apiMethods/videos/common.types'
import { getConvertedDate } from '../../../../utils/getConvertedDate'
import { Post } from '../Post'

interface ContentProps {
  children: ReactNode
  currentDefaultPosts: Item[]
}

export const Content = ({
  children,
  currentDefaultPosts,
}: ContentProps): React.JSX.Element => {
  const navigate = useNavigate()
  return (
    <div className="content">
      <div className="separator" />
      <div className="posts">
        {currentDefaultPosts.map(
          ({ contentDetails, id, snippet, statistics }, index) => (
            <Post
              key={index}
              createdDate={getConvertedDate(snippet.publishedAt)}
              imageUrl={snippet.thumbnails.medium.url}
              statistics={statistics}
              title={snippet.title}
              onClick={(): void => {
                navigate(`/video/${id}`)
              }}
              duration={moment.duration(contentDetails.duration).asSeconds()}
            />
          )
        )}
      </div>
      <div className="pagination-actions">{children}</div>
    </div>
  )
}
