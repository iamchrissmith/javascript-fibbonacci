function getFibbonacci(target) {
  this.target = target,
  this.getFNumbers = () => {
    let last = 0,
        current = 1,
        temp,
        result = [[]],
        arrays = 0

    while (target > 0) {

      if (result[arrays].length >= 5) {
        result.push([])
        arrays++
      }
      temp = current
      current = last + current
      result[arrays].push(last)
      last = temp
      target--
    }
    return result
  },
  this.lpad = (str, length) => {
    while (str.length < length) {
      str = ' ' + str;
    }
    return str
  },
  this.printFNumbers = () => {
    results = this.getFNumbers()
    last_array = results[results.length-1]
    max_length = last_array[last_array.length-1].toString().length + 1
    results.forEach( (array) => {
      output = ""
      array.forEach( (number) => {
        output += this.lpad(number.toString(),max_length)
      })
      console.log(output)
    })
  }
}

module.exports = getFibbonacci

const fNumbers = new getFibbonacci(100)
fNumbers.printFNumbers()
