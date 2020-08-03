const fs = require('fs-extra')
import * as path from 'path'

function throwError() {
  throw new Error('Você precisa fazer o login. Execute o comando "ppp login"')
}

export default async function (configDir: string) {
  if (
    !fs.existsSync(configDir) ||
    !fs.existsSync(path.join(configDir, 'config.json'))
  ) {
    throwError()
  }
  const config = await fs.readJSON(path.join(configDir, 'config.json'))
  if (!config) {
    throwError()
  }

  return config
}
