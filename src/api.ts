import fetch from 'node-fetch'

async function login(email: string, password: string) {
  const response = await fetch(
    'https://api.pontomais.com.br/api/auth/sign_in',
    {
      headers: {
        accept: 'application/json, */*',
        'api-version': '2',
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({ login: email, password }),
      method: 'POST',
    }
  )
  const data = await response.json()

  return {
    email,
    token: data.token,
    client: data.client_id,
  }
}

async function session(credentials) {
  const response = await fetch('https://api.pontomais.com.br/api/session', {
    headers: {
      accept: 'application/json, text/plain, */*',
      'access-token': credentials.token,
      'api-version': '2',
      client: credentials.client,
      'token-type': 'Bearer',
      uid: credentials.email,
    },
    method: 'GET',
  })
  const data = await response.json()

  return {
    id: data.session.employee.id,
  }
}

export { login, session }
