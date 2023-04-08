
const service = async <D>(data: string, path?: string) => {
  const response = await fetch(`http://192.168.0.42:80/${path ?? ''}?text=${data}`,
    {
      method: 'POST'
    })
  const json: D = await response.json()
  return json
}

export default service
