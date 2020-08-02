import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import fetch from 'node-fetch' 
const fs = require('fs-extra')
import * as path from 'path'
import { login } from '../api'

export default class Login extends Command {
  static description = 'Faz o login no Pontomais'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    if (!fs.existsSync(this.config.configDir)) {
      fs.mkdirSync(this.config.configDir, {recursive: true})
    }
    const credentialsFile = path.join(this.config.configDir, 'credentials.json')
    const email = await cli.prompt('Email')
    const password = await cli.prompt('Password', {type: 'hide'})
    const credentials = await login(email, password)

    fs.writeFileSync(credentialsFile, JSON.stringify(credentials))
  }
}
