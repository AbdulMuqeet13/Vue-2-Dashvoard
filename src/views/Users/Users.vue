<template>
  <div>
    <data-table
      :loader="loadData"
      :headers="headers"
      title="Users"
      :allow-add="true"
      @add-new="$router.push({name:'user-form'})"
      @done="$router.back()"
      delete-handler="delete"
      edit-handler="edit"
    >
    </data-table>

    <loading-dialog v-model="loadingDialog" message="Updating User"/>
  </div>
</template>

<script>
import DataTable from '../../components/DataTable';
// import {NotificationsService} from '@/services/notifications-service';
import LoadingDialog from "../../components/LoadingDialog";
// import { getUser } from '@/utils/local';


export default {
  components: {LoadingDialog, DataTable},

  data: () => ({
    loading: false,
    loadingDialog: false,
    // service: new NotificationsService(),

    headers: [
      {
        text: 'User Name',
        value: 'username',
        sortable: false
      },
      {
        text: 'Email',
        value: 'email',
        sortable: false
      },
    ]
  }),

  methods: {
    // getUser,
    // edit(item) {
    //   this.$router.push(`/notification?id=${item.id}`);
    // },
    // addNew() {
    //   this.$router.push('/notification');
    // },
    loadData() {
    //   return this.service.fetchAll();
        return [
            {
                username: 'Test name',
                email: 'email@test.com',
            }
        ]
    },
    // async sendNotification(item) {
    //   this.loadingDialog = true
    //   await this.service.send(item);
    //   this.loadingDialog = false
    // }
  }
};
</script>

<style lang="sass" scoped>
.chip
  font-weight: 500
  padding: 5px 10px
  border-radius: 50px
  background: lightgray
</style>
