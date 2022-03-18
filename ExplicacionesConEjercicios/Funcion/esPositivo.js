function esPositivo(number) {
  if (number === 0) {return false}
  return ((number >> 31) & 1) === 0
}
console.log(esPositivo(14))
