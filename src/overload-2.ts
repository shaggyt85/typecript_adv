function  parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('')
  }
}

const rtaArray = parseStr("nico")
if (Array.isArray(rtaArray)) {
  rtaArray.reverse()
}
console.log(rtaArray, 'array')

const rtaString = parseStr(['1', '2', '3'])
console.log(rtaString, 'string')
