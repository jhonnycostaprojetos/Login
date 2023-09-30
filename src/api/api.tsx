export const API_URL = 'https://us-east-1.aws.data.mongodb-api.com/app/loginapp-pttci/endpoint'

export function loginPost(user: string, password: string) {
  return {
    url: API_URL + `/authenticate?user=${user}&password=${password}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    }
  }
}