import fetch from 'node-fetch'
import { v4 as uuidv4 } from 'uuid'

function headers(credentials: any) {
  return {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json, text/plain, */*',
    'access-token': credentials.token,
    'api-version': '2',
    client: credentials.client,
    'token-type': 'Bearer',
    uid: credentials.email,
    uuid: credentials.uuid,
    origin: 'https://app.pontomaisweb.com.br',
  }
}

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
    uuid: uuidv4(),
  }
}

async function session(credentials: any) {
  const response = await fetch('https://api.pontomais.com.br/api/session', {
    headers: headers(credentials),
    method: 'GET',
  })
  const data = await response.json()

  return {
    id: data.session.employee.id,
  }
}

async function balance(employee: any, credentials: any) {
  const response = await fetch(
    `https://api.pontomais.com.br/api/employees/statuses/${employee.id}`,
    {
      headers: headers(credentials),
      method: 'GET',
    }
  )
  const data = await response.json()
  if (data.error) throw new Error(data.error)

  return data.statuses.time_balance
}

async function time(credentials: any, date: string) {
  const response = await fetch(
    `https://api.pontomais.com.br/api/time_card_control/current/work_days/${date}`,
    {
      headers: headers(credentials),
      method: 'GET',
    }
  )
  const data = await response.json()
  if (data.error) throw new Error(data.error)

  return data.work_day.time_cards.map((time_card: any) => time_card.time)
}

async function local() {
  const response = await fetch('https://freegeoip.app/json/', {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  })

  const data = await response.json()

  return data
}

async function punch(credentials: any, local: any) {
  const response = await fetch(
    'https://api.pontomais.com.br/api/time_cards/register',
    {
      headers: headers(credentials),
      body: JSON.stringify({
        time_card: {
          latitude: local.latitude,
          longitude: local.longitude,
          address: local.address,
          original_latitude: local.latitude,
          original_longitude: local.longitude,
          original_address: local.address,
        },
        _path: '/meu_ponto/registro_de_ponto',
        _appVersion: '0.10.32',
      }),
      method: 'POST',
    }
  )

  const data = await response.json()
  if (data.error) throw new Error(data.error)

  return data
}

export { login, session, balance, time, local, punch }
