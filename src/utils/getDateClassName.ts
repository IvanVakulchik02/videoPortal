export const getClassNameByDate = (dateInMilliseconds: number): string => {
  const now = Date.now()
  const oneMonthAgo = now - 30 * 24 * 60 * 60 * 1000
  const sixMonthsAgo = now - 6 * 30 * 24 * 60 * 60 * 1000
  const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000

  if (dateInMilliseconds < sixMonthsAgo) {
    return 'post-label-red'
  }

  if (dateInMilliseconds < oneMonthAgo) {
    return 'post-label-yellow'
  }

  if (dateInMilliseconds < oneWeekAgo) {
    return 'post-label-green'
  }

  return 'post-label-blue'
}
