const build = (initialState, modifiers) => {
  const result = modifiers.reduce((acc, fn) => {
    return fn(acc)
  }, initialState)
  return result
}

const withCheese = (sandwitch = {}) => {
  return { ...sandwitch, cheese: true }
}

const withTomato = (sandwitch = {}) => {
  return { ...sandwitch, tomato: true }
}

const withPicles = (sandwitch = {}) => {
  return { ...sandwitch, picles: true }
}

const withSteak = (steak) => (sandwitch) => {
  return { ...sandwitch, steak }
}

const defaultSandwitch = {
  cheese: false,
  tomato: false,
  picles: false,
  steak: 'beef'
}

const sandwitch = build(defaultSandwitch, [
  withCheese,
  withTomato,
  withSteak('chicken')
])

