import { Command, flags } from '@oclif/command'
var intervalToDuration = require('date-fns/intervalToDuration')
var format = require('date-fns/format')
var toDate = require('date-fns/toDate')
var parse = require('date-fns/parse')
import getConfig from '../config'
import { time } from '../api'

export default class Tempo extends Command {
  static description = 'Quanto tempo você já trabalhou hoje'

  async run() {
    const { credentials } = await getConfig(this.config.configDir)
    this.log(await this.calculate_duration(credentials))
  }

  async calculate_duration(credentials: any) {
    const date = format(new Date(), 'yyyy-MM-dd')
    const work_times = await time(credentials, date)
    let durations = []
    for (let i = 0; i < work_times.length; i++) {
      let start = parse(work_times[i], 'HH:mm', new Date())
      i++
      let end = work_times[i]
      if (end) {
        end = parse(end, 'HH:mm', new Date())
      } else {
        end = new Date()
      }
      durations.push(intervalToDuration({ start, end }))
    }

    const { hours, minutes } = durations.reduce(
      (acc, e) => {
        let minutes = acc.minutes + e.minutes
        let hours_from_minutes = Math.floor(minutes / 60)
        return {
          hours: acc.hours + e.hours + hours_from_minutes,
          minutes: minutes % 60,
        }
      },
      { hours: 0, minutes: 0 }
    )
    const hours_padded = hours < 10 ? `0${hours}` : hours
    const minutes_padded = minutes < 10 ? `0${minutes}` : minutes
    return `${hours_padded}:${minutes_padded}`
  }
}
