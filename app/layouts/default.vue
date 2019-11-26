<template>
  <v-app>
    <v-app-bar color="indigo" dark fixed>
      <v-toolbar-title>運行情報(関東)</v-toolbar-title>
    </v-app-bar>
    <v-content class="content">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>


<style scoped>
.content {
  margin-top: 50px;
}
</style>
