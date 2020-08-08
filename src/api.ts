import fetch from 'node-fetch'

function headers(credentials: any) {
  return {
    accept: 'application/json, text/plain, */*',
    'access-token': credentials.token,
    'api-version': '2',
    client: credentials.client,
    'token-type': 'Bearer',
    uid: credentials.email,
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
  console.log(data)

  return {
    email,
    token: data.token,
    client: data.client_id,
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

  return data.work_day.time_cards.map((time_card) => time_card.time)
}

export { login, session, balance, time }
