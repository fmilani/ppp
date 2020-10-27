import { Command } from '@oclif/command'
const fs = require('fs-extra')
import * as path from 'path'
import getConfig from '../config'
import { local } from '../api'
import { cli } from 'cli-ux'

export default class Local extends Command {
  static description =
    'Obtém sua localização a ser usada no ponto e a salva nas configurações'

  async run() {
    const config = await getConfig(this.config.configDir)

    this.log('Informe sua rua, número, bairro, cidade e estado')
    this.log('Ex.: Rua Padre Anchieta, 2310, Bigorrilho, Curitiba-PR')
    const address = await cli.prompt('Endereço')

    const { latitude, longitude } = await local()

    const configFile = path.join(this.config.configDir, 'config.json')

    fs.writeFileSync(
      configFile,
      JSON.stringify({ ...config, local: { latitude, longitude, address } })
    )

    this.log('Sua localização foi atualizada para ser usada no ponto')
  }
}
