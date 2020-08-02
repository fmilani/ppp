const fs = require('fs-extra')
import * as path from 'path'

function throwError() {
  throw new Error('Você precisa fazer o login. Execute o comando "ppp login"')
}

export default async function getCredentials(configDir: string) {
  if (!fs.existsSync(configDir) || !fs.existsSync(path.join(configDir, 'credentials.json'))) {
    throwError()
  }
  const credentials = await fs.readJSON(path.join(configDir, 'credentials.json'))
  if (!credentials) {
    throwError()
  }

  return credentials
}

