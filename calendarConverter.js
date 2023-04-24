const fs = require('fs')
const dayjs = require('dayjs')
// Read the input file
const inputStr = fs.readFileSync('input_calendar.json', 'utf8')
const inputArray = JSON.parse(inputStr)

const months = {
  stycznia: '01',
  lutego: '02',
  marca: '03',
  kwietnia: '04',
  maja: '05',
  czerwca: '06',
  lipca: '07',
  sierpnia: '08',
  września: '09',
  października: '10',
  listopada: '11',
  grudnia: '12'

}

// Function to parse a single input object and return the output object
function parseInputObject (inputObj) {
  const title = inputObj.name.split(' - ')[0]
  const desc = inputObj.name.split(' - ')[1]
  const dayOfWeek = inputObj.date.split(',')[0]
  const dateWithHour = inputObj.date.split(',')[1]
  const date = dateWithHour.split('⋅')[0].trim()
  const hour = dateWithHour.split('⋅')[1]
  const day = date.split(' ')[0]
  const month = date.split(' ')[1]
  const parsedDate = `2023-${months[month]}-${day}`

  return {
    title,
    desc,
    day,
    month,
    hour,
    day_of_week: dayOfWeek,
    date: parsedDate
  }
}
// return this.calendar.filter(el => this.$dayjs(el.date, 'DD MMMM 2023').isAfter(this.$dayjs().subtract(1, 'day')))

// Map the input array to the output array using the parseInputObject function
const outputArray = inputArray.map(parseInputObject)
const active = outputArray.filter(event => dayjs(event.date).isAfter((dayjs().subtract(1, 'day'))))

// Write the output file
fs.writeFileSync('calendar.json', JSON.stringify(active))

console.log('Conversion complete!')
