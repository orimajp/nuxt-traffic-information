<template>
  <v-row justify="center" align="center" id="content">
    <v-col cols="12" md="8">
      <Notification :notification="notification" />
    </v-col>
  </v-row>
</template>

<script>
import PullToRefresh from 'pulltorefreshjs'
import Notification from '@/components/Notification'

export default {
  components: {
    Notification
  },
  async asyncData({ app }) {
    const notificationInformation = await app.$trafficInformationApi.getNotificationInformation()
    return {
      notification: notificationInformation
    }
  },
  mounted() {
    PullToRefresh.init({
      mainElement: '#content',
      onRefresh: this.refreshData
    })
  },
  beforeDestroy() {
    PullToRefresh.destroyAll()
  },
  methods: {
    async refreshData() {
      this.notification = await this.$trafficInformationApi.getNotificationInformation()
    }
  }
}
</script>
