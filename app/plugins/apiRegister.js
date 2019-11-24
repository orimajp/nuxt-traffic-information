import trafficInformationApi from '@/api/TrafficInformationApi'

export default ({ $axios }, inject) => {
  console.log('trafficInformationApi installed.')
  inject('trafficInformationApi', trafficInformationApi($axios))
}
