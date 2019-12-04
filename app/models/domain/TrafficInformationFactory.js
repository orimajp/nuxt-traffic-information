import getTargetRoute from '@/models/domain/TargetRoute2'
import TrafficInformation from '@/models/domain/TrafficInformation'

function createTrafficInformation(source) {
  const route = getTargetRoute(source.company, source.name)
  if (route === null) {
    return null
  }
  return new TrafficInformation(route.company, route.name, route.website)
}

export default createTrafficInformation
