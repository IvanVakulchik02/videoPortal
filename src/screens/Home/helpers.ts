import { cloneDeep } from 'lodash'

import { getConvertedDate } from '../../utils/getConvertedDate'

export const sortVideos = (
  items: any[],
  sortBy: string,
  sortDirection: 'asc' | 'desc'
): any[] => {
  const sortedItems = cloneDeep(items).sort((a, b) => {
    const valA =
      sortBy === 'publishedAt'
        ? getConvertedDate(a.snippet.publishedAt)
        : +a.statistics.viewCount
    const valB =
      sortBy === 'publishedAt'
        ? getConvertedDate(b.snippet.publishedAt)
        : +b.statistics.viewCount
    return sortDirection === 'asc' ? valA - valB : valB - valA
  })
  return sortedItems
}

export const filterVideos = (items: any[], searchQuery: string): any[] => {
  const lowerCaseQuery = searchQuery.toLowerCase()
  return items.filter((item) =>
    item.snippet.title.toLowerCase().includes(lowerCaseQuery)
  )
}
