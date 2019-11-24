<template>
  <div>
    <v-alert
      v-if="empty"
      type="info">
      通常運行中です。
    </v-alert>
    <template v-else>
      <v-list
        v-for="companyTrafficInformation in notification.companyTrafficInformations"
        :key="companyTrafficInformation.companyName">
        <v-subheader
          insent
          v-text="companyTrafficInformation.companyName"/>
        <v-list-item
          v-for="routeTrafficInformation in companyTrafficInformation.routeTrafficInformations"
          :key="routeTrafficInformation.routeName"
          @click="toWebSite(routeTrafficInformation.siteUrl)"
        >
          <v-list-item-content v-text="routeTrafficInformation.routeName"/>
          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="companyTrafficInformation.companyName"/>
      </v-list>

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

<style scoped>
</style>
