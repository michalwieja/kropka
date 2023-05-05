const fs = require('fs')
const ical = require('ical')
const dayjs = require('dayjs')
require('dayjs/locale/pl')

dayjs.locale('pl')

function parseICalFile (filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8')

  const parsedICalData = Object.values(ical.parseICS(fileContent)).filter(el => el.summary)

  const events = parsedICalData.flatMap((event) => {
    const eventDate = dayjs(event.start)
    if (!event.rrule) {
      return {
        date: eventDate,
        dayOfWeek: eventDate.format('dddd'),
        startHour: eventDate.format('HH:mm'),
        endHour: dayjs(event.end).format('HH:mm'),
        summary: event.summary
      }
    } else {
      const eventInterval = event.rrule?.options.interval
      const eventUntil = event.rrule?.options.until
      const eventCount = event.rrule?.options.count
      console.log(eventCount)

      const recurringEvents = []
      for (let i = 0; i < 52; i++) {
        const recurringDate = eventDate.add(i * eventInterval * 7, 'day')
        if (recurringDate.isBefore(eventUntil) || !eventUntil) {
          recurringEvents.push({
            date: recurringDate.format('YYYY-MM-DD'),
            dayOfWeek: recurringDate.format('dddd'),
            startHour: eventDate.format('HH:mm'),
            endHour: dayjs(event.end).format('HH:mm'),
            summary: event.summary
          })
        }
      }
      return recurringEvents
    }
  })

  const fourWeeksFromNow = dayjs().add(4, 'week')

  const currentEvents = events.filter((event) => {
    const eventDate = dayjs(event?.date)
    return eventDate.isAfter(dayjs().subtract(3, 'day')) && eventDate.isBefore(fourWeeksFromNow)
  })

  const sortedEvents = currentEvents.sort((a, b) => dayjs(a.date).isAfter(dayjs(b.date)) ? 1 : -1)

  fs.writeFileSync('parsed.json', JSON.stringify(sortedEvents))
}

parseICalFile('./file.ics')
