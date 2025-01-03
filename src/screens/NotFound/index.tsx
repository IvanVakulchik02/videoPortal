import { Link } from 'react-router-dom'

import { NotFoundIcon } from '../../components/Icons/NotFoundIcon'

export const NotFoundScreen = (): React.JSX.Element => {
  return (
    <div className="error-page__wrapper">
      <div className="error-page__content">
        <div className="error-page__icon">
          <NotFoundIcon />
        </div>
        <div className="error-page__content-info">
          <div className="error-page__content-info__text">
            Something went wrong...
          </div>
          <Link to="/" className="error-page__content-info__link">
            Return to main page
          </Link>
        </div>
      </div>
    </div>
  )
}
