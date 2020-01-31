import apisauce from 'apisauce'

const create = (baseURL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'content-type': 'application/json',
    },
    timeout: 5000,
  })
  // example
  // const teams = () => {
  //   return api.get('/teams')
  // }

  return {}
}

export default {create}
