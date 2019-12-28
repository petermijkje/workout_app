const createDate = () => {
  const currentDate = new Date()
  const thisDay = currentDate.getDate()
  const thisMonth = currentDate.getMonth()
  const thisYear = currentDate.getFullYear()
  return `${thisDay}/${thisMonth}/${thisYear}`
}
module.exports = {
  createDate
}
