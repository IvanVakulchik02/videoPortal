interface MyVideoProps {
  createdDate: string
  imgUrl: string
  title: string
}

export const MyVideo = ({
  createdDate,
  imgUrl,
  title,
}: MyVideoProps): React.JSX.Element => {
  return (
    <div className="my-video">
      <img className="my-video__img" src={imgUrl} />
      <div className="my-video__title">{title}</div>
      <div className="created-date">{createdDate}</div>
    </div>
  )
}
