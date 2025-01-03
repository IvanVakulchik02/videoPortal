import React from 'react'

import { Statistics } from '../../apiMethods/videos/common.types'
import { getLocaleNumber } from '../../utils/getLocaleNumber'
import { CommentIcon } from '../Icons/CommentIcon'
import { FavoriteIcon } from '../Icons/FavoriteIcon'
import { LikeIcon } from '../Icons/LikeIcon'
import { ViewIcon } from '../Icons/ViewIcon'

interface VideoStatisticsProps {
  statistics: Statistics
}

export const VideoStatistics = ({
  statistics,
}: VideoStatisticsProps): React.JSX.Element => {
  return (
    <div className="video__statistics">
      <div className="video__statistics-item">
        <ViewIcon />
        {getLocaleNumber(+statistics.viewCount)}
      </div>
      <div className="video__statistics-item">
        <LikeIcon /> {getLocaleNumber(+statistics.likeCount)}
      </div>
      <div className="video__statistics-item">
        <FavoriteIcon /> {getLocaleNumber(+statistics.favoriteCount)}
      </div>
      <div className="video__statistics-item">
        <CommentIcon /> {getLocaleNumber(+statistics.commentCount)}
      </div>
    </div>
  )
}
