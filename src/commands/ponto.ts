import { Command, flags } from '@oclif/command'
import getConfig from '../config'
import { punch } from '../api'

export default class Ponto extends Command {
  static description = 'Bate o ponto no Pontomais'

  async run() {
    const { credentials, local } = await getConfig(this.config.configDir)
    const response = await punch(credentials, local)
    this.log(response.success)
  }
}
