<template>
  <div>
    <v-app-bar app dark color="primary" elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"/>

      <v-app-bar-title>Dashboard</v-app-bar-title>
      <v-spacer/>
    </v-app-bar>
    <v-main class="main-bg">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="drawer" app>
      <!-- <img src="../assets/logo.png" alt="logo" class="logo" height="70"/> -->
      <!-- <h3 cl>Dashboard</h3> -->
      <v-divider/>
      <v-divider/>
      <template v-for="(route, key) in routes">
        <v-list-item
            v-if="route.isVisible"
            :key="key"
            class="route"
            color="#da57a7"
            active-class="route--active"
            exact
            dense
            :to="route.to"
        >
          <v-list-item-icon>
            <v-icon v-text="route.icon"/>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="route.title"/>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-else-if="route.isDivider" :key="key" style="margin: 10px 20px"/>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: true
        }
    },
    computed:{
        routes(){
            return [
                {
                    to: '/',
                    title: 'Dashboard',
                    icon: 'mdi-view-dashboard-variant',
                    isVisible: true
                },
                {
                    to: '/notifications',
                    title: 'Notification',
                    icon: 'mdi-bell',
                    isVisible: true
                },
                {
                    to: '/users',
                    title: 'Users',
                    icon: 'mdi-account-supervisor',
                    isVisible: true
                },
            ]
        }
    }
}
</script>

<style>

</style>