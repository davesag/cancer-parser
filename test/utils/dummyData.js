// utils
const utcDate = dateString => {
  const [year, month, day] = dateString.split('-').map(n => Number(n))
  return new Date(Date.UTC(year, month - 1, day))
}

const addDay = date => {
  const result = new Date(date)
  result.setDate(date.getDate() + 1)
  return result
}

const round = number => Number(number.toFixed(2))

const mostlyZero = max => {
  const n = Math.floor((Math.random() * max * 2 - max / 2) / 2)
  return n < 0 ? 0 : n
}

// dummy data generators
const populationRow = year => {
  const data = [year]
  let total = 0
  let number = 1000000 + Math.floor(Math.random() * 500000)

  for (let i = 0; i < 18; i++) {
    number = number + 50000 + Math.floor(Math.random() * 100000)
    total = total + number
    data.push(number)
  }
  data.push(total)
  return data
}

const incidentRow = year => {
  const data = [year]
  let total = 0
  const unknown = mostlyZero(10)
  for (let i = 0; i < 18; i++) {
    const number = 20 + Math.floor(Math.random() * 2000)
    total = total + number
    data.push(number)
  }
  data.push(unknown)
  data.push(total)
  return data
}

const flareRows = (start, end) => {
  const rows = []
  const startDate = utcDate(start)
  const endDate = utcDate(end)

  let offset = 1
  let date = startDate
  let jd = Math.floor(4800000 + Math.random() * 2000) / 2
  while (date <= endDate) {
    const north = mostlyZero(2000) / 100
    const south = mostlyZero(2000) / 100
    const total = north + south
    rows.push([
      date,
      offset,
      round(jd),
      round(north),
      round(south),
      round(total)
    ])
    date = addDay(date)
    offset += 1
    jd += Math.floor(Math.random() * 50) / 10
  }
  return rows
}

module.exports = { populationRow, incidentRow, flareRows }
