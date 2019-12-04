<template>
  <div>
    <v-alert
      v-if="empty"
      type="info">
      通常運行中です。
    </v-alert>
    <template v-else>
      <template
        v-for="(companyTrafficInformation) in notification.companyTrafficInformations">
        <v-list>
          <v-subheader
            insent
            v-text="companyTrafficInformation.companyName"/>
          <template
            v-for="(routeTrafficInformation, index) in companyTrafficInformation.routeTrafficInformations">
            <v-divider
              inset
              v-if="index !== 0"
              :key="index"/>
            <v-list-item
              :key="routeTrafficInformation.routeName"
              @click="toWebSite(routeTrafficInformation.siteUrl)">
              <v-list-item-avatar>
                <v-icon class="grey lighten-1 white--text">train</v-icon>
              </v-list-item-avatar>
              <v-list-item-content v-text="routeTrafficInformation.routeName"/>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list>
        <v-divider :key="companyTrafficInformation.companyName"/>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    notification: { type: Object, required: true }
  },
  computed: {
    empty() {
      return this.notification.emptyCompanyInformation()
    }
  },
  methods: {
    toWebSite(url) {
      window.open(url, '_blank')
    }
  }
}
</script>
