const reduceToAge = (acc, elem, index) => {
  acc[`age${index * 5}`] = elem
  return acc
}

module.exports = reduceToAge
