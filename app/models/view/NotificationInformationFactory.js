import NotificationInformation from '@/models/view/NotificationInformation'
import CompanyTrafficInformation from '@/models/view/CompanyTrafficInformation'
import RouteTrafficInformation from '@/models/view/RouteTrafficInformation'

function trafficInformationSort(traffic1, traffic2) {
  const name1 = traffic1.companyName
  const name2 = traffic2.companyName
  if (name1 < name2) {
    return -1
  }
  if (name1 > name2) {
    return 1
  }
  return 0
}

function getCompanyTrafficInformation(notificationInformation, companyName) {
  const existsCompanyTrafficInformation = notificationInformation.getCompanyTrafficInformation(
    companyName
  )
  if (existsCompanyTrafficInformation !== null) {
    return existsCompanyTrafficInformation
  }
  const newCompanyTrafficInformation = new CompanyTrafficInformation(
    companyName
  )
  notificationInformation.addCompanyTrafficInformation(
    newCompanyTrafficInformation
  )
  return newCompanyTrafficInformation
}

function createNotificationInformation(trafficInformations) {
  const notificationInformation = new NotificationInformation()
  if (trafficInformations.length === 0) {
    return notificationInformation
  }

  const informations = trafficInformations.slice(0).sort(trafficInformationSort)

  informations.forEach((item, index, array) => {
    console.log(
      'NotificationInformationFactory#createNotificationInformation(): item.companyName=' +
        item.companyName +
        ' item.routeName=' +
        item.routeName +
        ' item.siteUrl=' +
        item.siteUrl
    )
    const companyTrafficInformation = getCompanyTrafficInformation(
      notificationInformation,
      item.companyName
    )
    const routeTrafficInformation = new RouteTrafficInformation(
      item.routeName,
      item.siteUrl
    )
    companyTrafficInformation.addRouteTrafficInformation(
      routeTrafficInformation
    )
  })

  return notificationInformation
}

export default createNotificationInformation
