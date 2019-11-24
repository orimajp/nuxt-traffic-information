<template>
  <v-row
    justify="center"
    align="center">
    <v-col
      cols="12"
      md="8">
      <Notification
        :notification="notification"
      />
    </v-col>
  </v-row>
</template>

<script>
import Notification from '@/components/Notification'

export default {
  components: {
    Notification
  },
  async asyncData({ app }) {
    const notificationInformation = await app.$trafficInformationApi.getNotificationInformation()
    console.log(notificationInformation)
    return {
      notification: notificationInformation
    }
  }
}
</script>
