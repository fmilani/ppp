import { Command, flags } from '@oclif/command'
import fetch from 'node-fetch'
import getConfig from '../config'
import { balance } from '../api'

export default class Banco extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Banco)

    const { credentials, employee } = await getConfig(this.config.configDir)

    const time_balance = await balance(employee, credentials)
    const signal = time_balance > 0 ? '' : '-'
    const abs_balance = Math.abs(time_balance)
    const hours = Math.floor(abs_balance / 60 / 60)
    const hours_padded = hours < 10 ? `0${hours}` : hours
    const minutes = (abs_balance / 60) % 60
    this.log(`${signal}${hours_padded}:${minutes}`)
  }
}
