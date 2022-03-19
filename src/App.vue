<template>
  <v-app>
    <v-main>
      <router-view  v-if="$route.fullPath.includes('auth')"/>
      <Dashboard v-else>
        <router-view/>
      </Dashboard>
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from '@/components/Dashboard'
export default {
  name: 'App',
  components:{
    Dashboard
  },
  data: () => ({
    //
  }),
};
</script>
