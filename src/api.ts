import fetch from 'node-fetch'

async function login(email: string, password: string) {
const response = await fetch("https://api.pontomais.com.br/api/auth/sign_in", {
  "headers": {
    "accept": "application/json, */*",
    "accept-language": "en-US,en;q=0.9",
    "api-version": "2",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "if-modified-since": "Mon, 26 Jul 1997 05:00:00 GMT",
    "pragma": "no-cache",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "uuid": "93cffc60-76fd-4b2c-b12f-5fa596ed3851"
  },
  "referrer": "https://api.pontomais.com.br/",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": JSON.stringify({login: email, password}),
  "method": "POST",
  "mode": "cors"
})
const data = await response.json()

  return {
    token: data.token,
    client: data.client_id,
  }
}

export { login }
