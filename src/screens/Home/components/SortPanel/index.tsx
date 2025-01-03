import { ActionButton } from '../../../../components/ActionButton'

interface SortPanelProps {
  onClearFilters: () => void
  onFilterSearchQueryChange: (value: string) => void
  onSortByChange: (value: '' | 'publishedAt' | 'views') => void
  onSortDirection: (value: 'asc' | 'desc') => void
  searchQuery: string
  sortBy: '' | 'publishedAt' | 'views'
  sortDirection: 'asc' | 'desc'
}

export const SortPanel = ({
  onClearFilters,
  onFilterSearchQueryChange,
  onSortByChange,
  onSortDirection,
  searchQuery,
  sortBy,
  sortDirection,
}: SortPanelProps): React.JSX.Element => {
  return (
    <div className="sort-panel">
      <div className="sort-panel__item">
        <label className="sort-label" htmlFor="sortBy">
          Sort by:
        </label>
        <select
          className="sort-select"
          id="sortBy"
          value={sortBy}
          onChange={({ target: { value } }): void =>
            onSortByChange(value as '' | 'publishedAt' | 'views')
          }
        >
          <option value="">don't sort</option>
          <option value="publishedAt">Created date</option>
          <option value="views">Views</option>
        </select>
      </div>
      <div className="sort-panel__item">
        <label className="sort-label" htmlFor="sortDirection">
          Direction:
        </label>
        <select
          className="sort-select"
          id="sortDirection"
          value={sortDirection}
          onChange={({ target: { value } }): void =>
            onSortDirection(value as 'asc' | 'desc')
          }
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      <div className="sort-panel__item">
        <label className="sort-label" htmlFor="search">
          Search by name:
        </label>
        <input
          className="search-input"
          type="text"
          id="search"
          value={searchQuery}
          onChange={({ target: { value } }): void =>
            onFilterSearchQueryChange(value)
          }
        />
      </div>
      <ActionButton
        className="clear-filter__btn"
        title="Clear Filters"
        onClick={onClearFilters}
      />
    </div>
  )
}
