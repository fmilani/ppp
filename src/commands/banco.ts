import { Command, flags } from '@oclif/command'
import fetch from 'node-fetch'
import getConfig from '../config'

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

    const response = await fetch(
      `https://api.pontomais.com.br/api/employees/statuses/${employee.id}`,
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'access-token': credentials.token,
          'api-version': '2',
          client: credentials.client,
          'token-type': 'Bearer',
          uid: 'felipe.milani@evoluservices.com',
        },
        method: 'GET',
        mode: 'cors',
      }
    )
    const data = await response.json()

    const signal = data.statuses.time_balance > 0 ? '' : '-'
    const time_balance = Math.abs(data.statuses.time_balance)
    const hours = Math.floor(time_balance / 60 / 60)
    const hours_padded = hours < 10 ? `0${hours}` : hours
    const minutes = (time_balance / 60) % 60
    this.log(`${signal}${hours_padded}:${minutes}`)
  }
}
