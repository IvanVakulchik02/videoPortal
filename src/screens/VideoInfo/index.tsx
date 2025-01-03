import clsx from 'clsx'
import moment from 'moment'
import { useNavigate, useParams } from 'react-router-dom'
import ReactTruncate from 'react-truncate'

import { useEffect } from 'react'

import { GoBackButton } from '../../components/GoBackButton'
import { GoBackIcon } from '../../components/Icons/GoBackIcon'
import { Loader } from '../../components/Loader'
import { VideoStatistics } from '../../components/VideoStatistics'
import { useAppDispatch, useAppSelector } from '../../store'
import { loadVideoDetails } from '../../store/features/videoDetails/videoDetailsDataSlice'
import { getConvertedDate } from '../../utils/getConvertedDate'
import { getClassNameByDate } from '../../utils/getDateClassName'

export const VideoInfoScreen = (): React.JSX.Element => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {
    videoDetails: { data, isLoading },
  } = useAppSelector((state) => state)

  const item = data?.items[0]

  const durationSeconds = moment
    .duration(item?.contentDetails.duration)
    .asSeconds()

  useEffect(() => {
    if (id) {
      dispatch(loadVideoDetails(id))
    }
  }, [])

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !!item && (
        <div className="video-screen">
          <GoBackButton
            className={clsx(
              'go-back__button',
              getClassNameByDate(getConvertedDate(item.snippet.publishedAt))
            )}
            onClick={(): Promise<void> | void => navigate(-1)}
          >
            <GoBackIcon />
          </GoBackButton>
          <div
            className={clsx(
              'video-screen__preview',
              getClassNameByDate(getConvertedDate(item.snippet.publishedAt))
            )}
          >
            <div className="video-screen__preview-image">
              <img className="image" src={item.snippet.thumbnails.maxres.url} />
              <div className="duration">
                {moment.utc(durationSeconds * 1000).format('mm:ss')}
              </div>
            </div>
            <div className="video-screen__preview-right">
              <div className="video-screen__preview-info">
                <div className="video-screen__preview-info__title">
                  <ReactTruncate lines={2}>{item.snippet.title}</ReactTruncate>
                  <div className="date">
                    {moment(item.snippet.publishedAt).format('DD.MM.YYYY')}
                  </div>
                </div>
                <div className="video-screen__preview-info__description">
                  <div className="title">Описание:</div>

                  <ReactTruncate lines={5}>
                    {item.snippet.description}
                  </ReactTruncate>
                </div>
              </div>
              <VideoStatistics statistics={item.statistics} />
              <div
                className={clsx(
                  'label',
                  getClassNameByDate(getConvertedDate(item.snippet.publishedAt))
                )}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
