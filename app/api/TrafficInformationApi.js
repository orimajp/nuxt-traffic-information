import createTrafficInformation from '@/models/domain/TrafficInformationFactory'
import createNotificationInformation from '@/models/view/NotificationInformationFactory'

//const url = 'https://tetsudo.rti-giken.jp/free/delay.json'
const url = '/free/delay.json'

function jsonToNotificationInformation(trafficData) {
  console.log('trafficData count is ' + trafficData.length)
  const trafficInformations = []
  for (const data of trafficData) {
    const trafficInformation = createTrafficInformation(data)
    if (trafficInformation !== null) {
      trafficInformations.push(trafficInformation)
    }
  }
  console.log('trafficInformation count is ' + trafficInformations.length)
  return createNotificationInformation(trafficInformations)
}

export default axios => ({
  getNotificationInformation() {
    return axios
      .get(url)
      .then(data => {
        return jsonToNotificationInformation(data.data)
      })
      .catch(err => {
        throw err
      })
  }
})
