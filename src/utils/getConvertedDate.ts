export const getConvertedDate = (date: Date): number => {
  const unixTime = new Date(date).getTime()
  return unixTime
}
