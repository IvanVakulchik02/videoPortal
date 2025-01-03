import { useEffect, useState } from 'react'

import { Item } from '../../apiMethods/videos/common.types'
import { Loader } from '../../components/Loader'
import { NoData } from '../../components/NoData'
import { useDebounce } from '../../hooks/useDebounce'
import { useAppDispatch, useAppSelector } from '../../store'
import {
  loadVideos,
  loadVideosBySearch,
  setSortedVideos,
} from '../../store/features/videos/videosDataSlice'

import { Content } from './components/Content'
import { Dropdown } from './components/Dropdown'
import { Header } from './components/Header'
import { Pagination } from './components/Pagination'
import { SortPanel } from './components/SortPanel'
import { filterVideos, sortVideos } from './helpers'

export const HomeScreen = (): React.JSX.Element => {
  const dispatch = useAppDispatch()

  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [isOpenSortPanel, setIsOpenSortPanel] = useState(false)
  const [sortBy, setSortBy] = useState<'' | 'publishedAt' | 'views'>(
    'publishedAt'
  )
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')
  const [filterSearchQuery, setFilterSearchQuery] = useState('')

  const {
    videos: {
      defaultVideos: { data: defaultData },
      isLoading,
      sortedVideos: { data: sortedData },
    },
  } = useAppSelector((state) => state)

  const debouncedFilterSearchQuery = useDebounce(filterSearchQuery)

  useEffect(() => {
    const sorted = sortVideos(defaultData?.items ?? [], sortBy, sortDirection)
    const filtered = filterVideos(sorted, debouncedFilterSearchQuery)
    dispatch(setSortedVideos(filtered.length ? filtered : sorted))
  }, [sortBy, sortDirection, debouncedFilterSearchQuery, defaultData])

  const getCurrentData = (): Item[] => {
    if (!!sortBy || !!filterSearchQuery) {
      return sortedData ?? []
    }

    return defaultData?.items ?? []
  }

  const itemsPerPageOptions = [12, 20, 32, 56]

  const totalPosts = getCurrentData().length

  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  const currentDefaultPosts =
    getCurrentData().slice(firstItemIndex, lastItemIndex) ?? []

  const totalPages = Math.ceil(totalPosts / itemsPerPage)
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  )

  const handleSearchClick = (): void => {
    if (searchValue === '') {
      return
    }
    setCurrentPage(1)
    dispatch(loadVideosBySearch(searchValue))
  }

  useEffect(() => {
    dispatch(loadVideos())
  }, [])

  return (
    <div className="home-screen">
      <Header
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
        onSearchClick={handleSearchClick}
        onLogoClick={(): void => {
          setSearchValue('')
          setSortBy('publishedAt')
          setSortDirection('desc')
          setFilterSearchQuery('')
          setIsOpenSortPanel(false)
          setCurrentPage(1)
          setItemsPerPage(12)
          dispatch(loadVideos())
        }}
        onFilterButtonClick={(): void => setIsOpenSortPanel(!isOpenSortPanel)}
      />
      {isOpenSortPanel && (
        <SortPanel
          sortBy={sortBy}
          sortDirection={sortDirection}
          searchQuery={filterSearchQuery}
          onFilterSearchQueryChange={setFilterSearchQuery}
          onSortByChange={setSortBy}
          onSortDirection={setSortDirection}
          onClearFilters={(): void => {
            setSortBy('')
            setSortDirection('desc')
            setFilterSearchQuery('')
          }}
        />
      )}
      {isLoading && <Loader />}
      {!isLoading && !totalPosts && <NoData />}
      {!isLoading && !!totalPosts && (
        <Content currentDefaultPosts={currentDefaultPosts}>
          <>
            <Pagination
              onClick={setCurrentPage}
              currentPage={currentPage}
              pageNumbers={pageNumbers}
            />
            <Dropdown
              title={`${itemsPerPage} / page`}
              options={itemsPerPageOptions}
              onSelectOption={(option: number): void => {
                if (itemsPerPage === option) {
                  return
                }
                setItemsPerPage(option)
                setCurrentPage(1)
                setIsOpenDropdown(false)
              }}
              selectedOption={itemsPerPage}
              onClick={(): void => setIsOpenDropdown(!isOpenDropdown)}
              isOpen={isOpenDropdown}
            />
          </>
        </Content>
      )}
    </div>
  )
}
