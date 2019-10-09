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
  const unknown = Math.floor(Math.random() * 10)
  for (let i = 0; i < 18; i++) {
    const number = 20 + Math.floor(Math.random() * 2000)
    total = total + number
    data.push(number)
  }
  data.push(unknown)
  data.push(total)
  return data
}

module.exports = { populationRow, incidentRow }
