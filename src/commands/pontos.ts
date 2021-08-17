import { Command } from '@oclif/command'
var format = require('date-fns/format')
import getConfig from '../config'
import { time } from '../api'

export default class Pontos extends Command {
  static description = 'Mostra os seus pontos de hoje'

  async run() {
    const { credentials } = await getConfig(this.config.configDir)
    const date = format(new Date(), 'yyyy-MM-dd')
    const work_times = await time(credentials, date)
    work_times.forEach((work_time: string) => this.log(work_time))
  }
}
