class NotificationInformation {
  constructor() {
    this.companyTrafficInformations = []
  }

  emptyCompanyInformation() {
    console.log('NotificationInformation#emptyCompanyInformation(): called.')
    return this.companyTrafficInformations.length === 0
  }

  addCompanyTrafficInformation(companyTrafficInformation) {
    console.log(
      'NotificationInformation#addCompanyTrafficInformation(): called.'
    )
    this.companyTrafficInformations.push(companyTrafficInformation)
    console.log(
      'NotificationInformation#addCompanyTrafficInformation(): companyTrafficInformations.size=' +
        this.companyTrafficInformations.length
    )
  }

  getCompanyTrafficInformation(companyName) {
    for (const value of this.companyTrafficInformations) {
      if (value.companyName === companyName) {
        return value
      }
    }
    return null
  }
}

export default NotificationInformation
