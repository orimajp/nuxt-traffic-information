class CompanyTrafficInformation {
  constructor(companyName) {
    this.companyName = companyName
    this.routeTrafficInformations = []
  }

  addRouteTrafficInformation(routeTrafficInformation) {
    this.routeTrafficInformations.push(routeTrafficInformation)
  }
}

export default CompanyTrafficInformation
