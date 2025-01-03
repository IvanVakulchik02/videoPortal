import clsx from 'clsx'

type PaginationProps = {
  currentPage: number
  onClick: (pageNumber: number) => void
  pageNumbers: number[]
}

export const Pagination = ({
  currentPage,
  onClick,
  pageNumbers,
}: PaginationProps): React.JSX.Element => {
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={clsx('pagination-item', {
              active: currentPage === number,
            })}
            onClick={(): void => onClick(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  )
}
